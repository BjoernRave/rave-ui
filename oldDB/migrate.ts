import CLIProgress from "cli-progress"
import fs from "fs"
import { prisma } from "../src/server/db"
import { PrismaClient } from "./.client"

const oldPrisma = new PrismaClient()

const loadingBar = new CLIProgress.SingleBar({
  format:
    "{bar}" + "| {percentage}% || {value}/{total} || Failures: {failureCount}",
})

const getDeviceType = (type) => {
  switch (type) {
    case 1:
      return "Windpark"
    case 2:
      return "Windturbine"
    case 3:
      return "Station"
    case 4:
      return "Kommunikation"
    case 7:
      return "Parksteuerung"
  }
}

const findSame = async () => {
  const wes_farms = await oldPrisma.wes_park.findMany()

  const duplicates = wes_farms.filter((f) => {
    const sameName = wes_farms.filter((farm) => farm.parkname === f.parkname)

    if (sameName.length > 1) {
      return true
    }

    return false
  })

  console.log(duplicates)
}

const migrateFarms = async () => {
  const wes_farms = await oldPrisma.wes_park.findMany()

  const farms = wes_farms.filter((f) => !f.ischild)

  const turbines = wes_farms.filter((f) => f.istype === 2)

  const devices = wes_farms.filter((f) => [3, 4, 7].includes(f.istype))

  loadingBar.start(farms.length, 0)

  const failed = []

  for (const farm of farms) {
    try {
      const farmTurbines = turbines.filter((t) => t.ischild === farm.id)
      const allFarmDevices = devices.filter((d) => d.ischild === farm.id)
      const farmDevices = allFarmDevices.filter(
        (d) => !farmTurbines.some((t) => d.parkname.includes(` - ${t.id}`))
      )

      const aggregatedTurbines = farmTurbines.map((t) => {
        const devices = allFarmDevices.filter((d) =>
          d.parkname.includes(` - ${t.id}`)
        )

        return {
          ...t,
          devices,
        }
      })

      const splittedName = farm.parkname.split(" - ")

      const name = splittedName[1]

      const group = splittedName[0].split("-")[0]

      const farmId = splittedName[0].split("-")[1]

      if (!name || !group || !farmId) {
        throw new Error("Invalid farm name")
      }

      const createdFarm = await prisma.windFarm.create({
        data: {
          name,
          farmId: Number(farmId),
          group,
          devices: {
            createMany: {
              data: farmDevices.map((d) => ({
                name: d.parkname,
                type: getDeviceType(d.istype),
              })),
            },
          },
        },
      })

      for (const turbine of aggregatedTurbines) {
        await prisma.windTurbine.create({
          data: {
            windFarm: { connect: { id: createdFarm.id } },
            name: turbine.parkname,
            devices: {
              createMany: {
                data: turbine.devices.map((d) => ({
                  name: d.parkname,
                  type: getDeviceType(d.istype),
                })),
              },
            },
          },
        })
      }
    } catch (error) {
      console.log(error)
      failed.push({ farm, error })
    }
    loadingBar.increment()
  }

  fs.writeFileSync("oldDB/failed/farms.json", JSON.stringify({ failed }))
  loadingBar.stop()
}

const migrateUsers = async () => {
  const users = await oldPrisma.wes_user.findMany()

  loadingBar.start(users.length, 0)

  const failed = []

  for (const user of users) {
    try {
      await prisma.user.create({
        data: {
          email: user.email,
          firstName: user.firstname,
          lastName: user.lastname,
          password: user.password,
        },
      })
    } catch (e) {
      failed.push({ user, error: e })
    }
    loadingBar.increment()
  }

  fs.writeFileSync("oldDB/failed/users.json", JSON.stringify({ failed }))
  loadingBar.stop()
}

const migrateAttributes = async () => {
  const categories = await oldPrisma.wes_cat.findMany()
  const attributes = await oldPrisma.wes_att.findMany()
  const attributeValues = await oldPrisma.wes_bewegungsdaten_cat.findMany()

  const failed = []

  loadingBar.start(categories.length, 0)

  const groupedCategories = categories.reduce((prev, next) => {
    if (!prev[next.type_id]) {
      prev[next.type_id] = [next]
    } else {
      prev[next.type_id] = [...prev[next.type_id], next]
    }

    return prev
  }, {})

  const aggregatedCategories = Object.keys(groupedCategories).map((key) => {
    const aggregated = groupedCategories[key].map((c) => {
      const groupAttributes = attributes
        .filter((a) => a.cat_id === c.id)
        .sort(
          (a, b) =>
            Number(a.sort.substring(a.sort.length - 3)) -
            Number(b.sort.substring(b.sort.length - 3))
        )
        .map((a) => {
          const values = attributeValues.filter((v) => v.att_id === a.id)
          return {
            ...a,
            values,
          }
        })

      return {
        ...c,
        attributes: groupAttributes,
      }
    })

    return {
      type: key,
      categories: aggregated.sort(
        (a, b) =>
          Number(a.sort.substring(a.sort.length - 3)) -
          Number(b.sort.substring(b.sort.length - 3))
      ),
    }
  })

  for (const categoryGroup of aggregatedCategories) {
    for (const [i, category] of categoryGroup.categories.entries()) {
      let createdCategory
      try {
        createdCategory = await prisma.attributeCategory.create({
          data: {
            name: category.catname,
            type: getDeviceType(category.type_id),
            sort: i + 1,
          },
        })
      } catch (e) {
        console.log(e)
        failed.push({ category: category.catname, error: JSON.stringify(e) })
        continue
      }

      for (const [i, attribute] of category.attributes.entries()) {
        let createdAttribute

        try {
          createdAttribute = await prisma.attribute.create({
            data: {
              name: attribute.attname,
              sort: i + 1,
              attributeCategory: {
                connect: { id: createdCategory.id },
              },
              dataType: "string",
            },
          })
        } catch (error) {
          console.log(error)
          failed.push({
            attribute: attribute.attname,
            error: JSON.stringify(error),
          })
          continue
        }

        for (const attributeValue of attribute.values) {
          try {
            const linkedFarm = await oldPrisma.wes_park.findUnique({
              where: { id: attributeValue.park_id },
            })

            if (!linkedFarm) {
              throw new Error("No linked farm")
            }

            const farmType = getDeviceType(linkedFarm.istype)

            if (farmType === "Windpark") {
              const farm = await prisma.windFarm.findUnique({
                where: { name: linkedFarm.parkname.split(" - ")[1] },
              })

              if (!farm) {
                throw new Error("No farm found")
              }

              await prisma.attributeValue.create({
                data: {
                  value: attributeValue.value,
                  isVerified: true,
                  windFarm: { connect: { id: farm.id } },
                  attribute: { connect: { id: createdAttribute.id } },
                },
              })
            } else if (farmType === "Windturbine") {
              const turbine = await prisma.windTurbine.findUnique({
                where: { name: linkedFarm.parkname },
              })

              if (!turbine) {
                throw new Error("No turbine found")
              }

              await prisma.attributeValue.create({
                data: {
                  value: attributeValue.value,
                  isVerified: true,
                  windTurbine: { connect: { id: turbine.id } },
                  attribute: { connect: { id: createdAttribute.id } },
                },
              })
            } else {
              const device = await prisma.device.findUnique({
                where: { name: linkedFarm.parkname },
              })

              if (!device) {
                throw new Error("No device found")
              }

              await prisma.attributeValue.create({
                data: {
                  value: attributeValue.value,
                  isVerified: true,
                  device: { connect: { id: device.id } },
                  attribute: { connect: { id: createdAttribute.id } },
                },
              })
            }
          } catch (error) {
            console.log(error)
            failed.push({
              value: attributeValue.value,
              error: JSON.stringify(error),
            })
            continue
          }
        }
      }
    }
    loadingBar.increment()
  }

  fs.writeFileSync(
    "oldDB/failed/attributeCategories.json",
    JSON.stringify({ failed })
  )
  loadingBar.stop()
}
// migrateFarms()
// migrateUsers()
migrateAttributes()

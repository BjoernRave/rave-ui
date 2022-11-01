import CLIProgress from "cli-progress"
import fs from "fs"
import { prisma } from "../src/server/db"
import { PrismaClient } from "./.client"

const oldPrisma = new PrismaClient()

const loadingBar = new CLIProgress.SingleBar({
  format:
    "{bar}" + "| {percentage}% || {value}/{total} || Failures: {failureCount}",
})

const migrateFarms = async () => {
  const farms = await oldPrisma.wes_park.findMany()

  const farmsWithDevices = farms
    .filter((farm) => !farm.ischild)
    .map((f) => {
      const turbines = farms.filter((t) => t.ischild === f.id && !isNaN(t.id))
      const devices = farms.filter(
        (farm) => farm.ischild === f.id && isNaN(farm.id)
      )

      const turbinesWithDevices = turbines.map((t) => {
        const turbineDevices = devices.filter(
          (d) => d.parkname.indexOf(String(t.id)) !== -1
        )

        return {
          ...t,
          devices: turbineDevices,
        }
      })

      return {
        ...f,
        turbines: turbinesWithDevices,
        devices,
      }
    })

  loadingBar.start(farmsWithDevices.length, 0)

  const failed = []

  for (const farm of farmsWithDevices) {
    await prisma.windFarm.create({
      data: {
        name: farm.parkname,
        devices: {
          createMany: { data: farm.devices.map((d) => ({ name: d.parkname })) },
        },
      },
    })
  }

  if (failed.length > 0) {
    fs.writeFileSync("oldDB/failed/users.json", JSON.stringify({ failed }))
  }
  loadingBar.stop()
}

migrateFarms()

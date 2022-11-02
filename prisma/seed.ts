import { prisma } from "../src/server/db"

const permissions = [
  "CREATE:FARM",
  "READ:FARM",
  "UPDATE:FARM",
  "DELETE:FARM",
  "CREATE:USER",
  "READ:USER",
  "UPDATE:USER",
  "DELETE:USER",
  "CREATE:ROLE",
  "READ:ROLE",
  "UPDATE:ROLE",
  "DELETE:ROLE",
]

async function main() {
  await prisma.permission.createMany({
    data: permissions.map((name) => ({ name })),
  })

  const role = await prisma.role.create({
    data: {
      name: "Admin",
      permissions: {
        connect: permissions.map((name) => ({ name })),
      },
    },
  })

  await prisma.user.create({
    data: {
      firstName: "Björn",
      lastName: "Rave",
      email: "bjoern.rave@gmail.com",
      password: "Admin123",
      role: {
        connect: {
          id: role.id,
        },
      },
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })

  .catch(async (e) => {
    console.error(e)

    await prisma.$disconnect()

    process.exit(1)
  })

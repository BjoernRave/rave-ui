import { prisma } from "../src/server/db"

const permissions = [
  "CREATE:FARM",
  "READ:FARM",
  "UPDATE:FARM",
  "CREATE:USER",
  "READ:USER",
  "UPDATE:USER",
]

async function main() {
  return prisma.permission.createMany({
    data: permissions.map((name) => ({ name })),
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

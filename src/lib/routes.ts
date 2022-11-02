interface Category {
  routes: Route[]
  name: string
}

interface Route {
  href: string
  name: string
  permissions: string[]
}

export const getEligibleRoutes = ({ roles }: { roles: any }) => {
  return routes
    .map((r) => {
      const filteredRoutes = r.routes.filter((r) => {
        return true
      })

      return {
        name: r.name,
        routes: filteredRoutes,
      }
    })
    .filter((r) => r.routes.length > 0)
}

// export const getEligibleRoutes = ({
//   permissions,
// }: {
//   permissions: string[]
// }) => {
//   return routes
//     .map((r) => {
//       const filteredRoutes = r.routes.filter((r) =>
//         r.permissions.some((p) => permissions.includes(p))
//       )

//       return {
//         name: r.name,
//         routes: filteredRoutes,
//       }
//     })
//     .filter((r) => r.routes.length > 0)
// }

export const routes: Category[] = [
  {
    name: "General",
    routes: [
      {
        href: "/windfarms",
        name: "Windparks",
        permissions: ["READ:FARM"],
      },
    ],
  },
  {
    name: "Nutzerverwaltung",
    routes: [
      {
        href: "/users",
        name: "Nutzer",
        permissions: ["READ:USER"],
      },
      {
        href: "/users/roles",
        name: "Rollen",
        permissions: ["READ:ROLE"],
      },
    ],
  },
]

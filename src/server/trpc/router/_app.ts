// src/server/trpc/router/_app.ts
import { router } from "../trpc"
import { authRouter } from "./auth"
import { roleRouter } from "./role"
import { windFarmRouter } from "./windFarm"

export const appRouter = router({
  auth: authRouter,
  role: roleRouter,
  windFarm: windFarmRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter

// src/server/trpc/router/_app.ts
import { router } from "../trpc"
import { authRouter } from "./auth"
import { roleRouter } from "./role"

export const appRouter = router({
  auth: authRouter,
  role: roleRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter

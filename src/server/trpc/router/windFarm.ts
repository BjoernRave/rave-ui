import { z } from "zod"
import { protectedProcedure, router } from "../trpc"

export const windFarmRouter = router({
  get: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.windFarm.findUnique({
        where: {
          id: input.id,
        },
        include: {
          attributeValues: {
            include: {
              attribute: true,
            },
          },
        },
      })
    }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.windFarm.findMany()
  }),
})

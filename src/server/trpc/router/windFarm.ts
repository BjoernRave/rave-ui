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
          turbines: {
            include: {
              devices: {
                include: {
                  attributeValues: {
                    include: {
                      attribute: {
                        include: {
                          attributeCategory: true,
                        },
                      },
                    },
                  },
                },
              },
              attributeValues: {
                include: {
                  attribute: {
                    include: {
                      attributeCategory: true,
                    },
                  },
                },
              },
            },
          },
          devices: {
            include: {
              attributeValues: {
                include: {
                  attribute: {
                    include: {
                      attributeCategory: true,
                    },
                  },
                },
              },
            },
          },
          attributeValues: {
            include: {
              attribute: {
                include: {
                  attributeCategory: true,
                },
              },
            },
          },
        },
      })
    }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.windFarm.findMany({
      include: {
        turbines: true,
      },
    })
  }),
})

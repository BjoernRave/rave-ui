import { RoleCreationSchema, RoleUpdateSchema } from "@/lib/zod-schema"
import { z } from "zod"
import { protectedProcedure, router } from "../trpc"

export const roleRouter = router({
  get: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.role.findUnique({
        where: { id: input.id },
        include: { permissions: true },
      })
    }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.role.findMany({ include: { permissions: true } })
  }),
  create: protectedProcedure
    .input(RoleCreationSchema)
    .mutation(async ({ ctx, input }) => {
      const role = await ctx.prisma.role.create({
        data: {
          name: input.name,
          description: input.description,
          permissions: {
            connect: input.permissions.map((permission) => ({
              id: permission,
            })),
          },
        },
      })
      return role
    }),
  update: protectedProcedure
    .input(RoleUpdateSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.role.update({
        where: { id: input.id },
        data: {
          name: input.name,
          description: input.description,
          permissions: {
            connect: input.permissions.map((permission) => ({
              id: permission,
            })),
          },
        },
      })
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const role = await ctx.prisma.role.delete({
        where: { id: input.id },
      })
      return role
    }),
})

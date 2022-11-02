import { UserCreationSchema, UserUpdateSchema } from "lib/zod-schema"
import { z } from "zod"
import { protectedProcedure, publicProcedure, router } from "../trpc"
export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session
  }),
  getPermissions: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.permission.findMany()
  }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany({
      select: {
        firstName: true,
        lastName: true,
        id: true,
        email: true,
        role: { include: { permissions: true } },
      },
    })
  }),
  create: protectedProcedure
    .input(UserCreationSchema)
    .mutation(async ({ input, ctx }) => {
      return ctx.prisma.user.create({
        data: {
          email: input.email,
          firstName: input.firstName,
          lastName: input.lastName,
          password: input.password,
          role: { connect: { id: input.role } },
        },
      })
    }),
  update: protectedProcedure
    .input(UserUpdateSchema)
    .mutation(async ({ input, ctx }) => {
      return ctx.prisma.user.update({
        where: {
          id: input.id,
        },
        data: {
          email: input.email,
          firstName: input.firstName,
          lastName: input.lastName,
          ...(input.password && { password: input.password }),
          role: { connect: { id: input.role } },
        },
      })
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input, ctx }) => {
      return ctx.prisma.user.delete({
        where: {
          id: input.id,
        },
      })
    }),
})

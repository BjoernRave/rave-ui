import {
  LoginSchema,
  RoleCreationSchema,
  UserCreationSchema,
} from "lib/zod-schema"

import { protectedProcedure, publicProcedure, router } from "../trpc"
export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session
  }),
  getPermissions: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.permission.findMany()
  }),
  getRoles: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.role.findMany()
  }),
  getUsers: protectedProcedure.query(({ ctx }) => {
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
  createRole: protectedProcedure
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
  createUser: protectedProcedure
    .input(UserCreationSchema)
    .mutation(async ({ input, ctx }) => {
      return ctx.prisma.user.create({
        data: {
          email: input.email,
          firstName: input.firstName,
          lastName: input.lastName,
        },
      })
    }),
  login: publicProcedure.input(LoginSchema).mutation(async ({ ctx, input }) => {
    const { username, password } = input

    const user = await ctx.prisma.user.findUnique({
      where: { email: username },
    })

    if (!user) {
      throw new Error("User not found")
    }

    if (user.password !== password) {
      throw new Error("Incorrect password")
    }

    return user
  }),
})

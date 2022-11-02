import { z } from "zod"

export const LoginSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export const UserCreationSchema = z.object({
  email: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  password: z.string(),
  role: z.number(),
})

export const UserUpdateSchema = UserCreationSchema.extend({
  id: z.number(),
})

export const RoleCreationSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  permissions: z.array(z.any()),
})

export const RoleUpdateSchema = RoleCreationSchema.extend({
  id: z.number(),
})

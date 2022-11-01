import { z } from "zod"

export const LoginSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export const UserCreationSchema = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
})

export const RoleCreationSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  permissions: z.array(z.any()),
})

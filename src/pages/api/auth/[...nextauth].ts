import NextAuth, { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import jwt from "jsonwebtoken"
import { prisma } from "../../../server/db"

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as any
      }
      if (session.user && token.permissions) {
        session.user.permissions = token.permissions as any
      }
      return session
    },
    jwt(stuff) {
      if (stuff.token && stuff.user) {
        stuff.token.permissions = (stuff.user as any).permissions
      }
      return stuff.token
    },
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    async encode(stuff) {
      return jwt.sign(stuff.token, process.env.NEXTAUTH_SECRET!)
    },
    async decode(stuff) {
      return jwt.verify(stuff.token!, process.env.NEXTAUTH_SECRET!) as any
    },
  },

  pages: {
    signIn: "/",
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        username: { label: "Email", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.username },
          include: {
            role: {
              include: {
                permissions: true,
              },
            },
          },
        })

        if (!user) {
          return null
        }

        if (user.password !== credentials.password) {
          return null
        }
        return {
          id: String(user.id),

          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          permissions: user.role
            ? user.role.permissions.map((p) => p.name)
            : [],
        }
      },
    }),
  ],
}

export default NextAuth(authOptions)

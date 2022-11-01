import NextAuth, { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import jwt from "jsonwebtoken"
import { prisma } from "../../../server/db"

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session(stuff) {
      // if (session.user && user) {
      //   session.user.id = user.id
      // }
      return stuff.session
    },
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    async encode({ token }) {
      return jwt.sign(token, process.env.NEXTAUTH_SECRET!)
    },
    async decode({ token }) {
      return jwt.verify(token!, process.env.NEXTAUTH_SECRET!) as any
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
        })

        if (!user) {
          return null
        }

        if (user.password !== credentials.password) {
          return null
        }
        return user as any
      },
    }),
  ],
}

export default NextAuth(authOptions)

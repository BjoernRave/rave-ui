import { getEligibleRoutes } from "@/lib/routes"
import Loader from "components/Blocks/Loader"
import Meta from "components/Blocks/Meta"
import { LoginSchema } from "lib/zod-schema"
import { GetServerSideProps, NextPage } from "next"
import { unstable_getServerSession } from "next-auth"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { Form, PasswordInput, SubmitButton, TextInput } from "../rave-ui"
import { authOptions } from "./api/auth/[...nextauth]"

const Home: NextPage = () => {
  const { query, replace } = useRouter()
  console.log(query)

  useEffect(() => {
    if (query.error) {
      toast.error("Login fehlgeschlagen")
      replace("/")
    }
  }, [])

  const [isLoading, setIsLoading] = useState(false)
  const handleLogin = async ({
    username,
    password,
  }: {
    username?: string
    password: string
  }) => {
    setIsLoading(true)
    await signIn("credentials", {
      username,
      password,
      callbackUrl: "/dashboard/users",
    })
    setIsLoading(false)
  }

  //       n_n
  //     <[o.~]>
  //       TT  \
  // >>-\(.Y.) |----<3
  //      | | /
  //      L L
  //    8===|===D

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Meta />
      <Toaster />
      <div className="flex w-full max-w-md flex-col items-center space-y-8">
        <img className="mx-auto h-12 w-auto" src={"/logo.png"} alt="Logo" />
        {isLoading ? (
          <Loader className="!h-8 !w-8" />
        ) : (
          <>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Melde dich an
            </h2>

            <Form
              validationSchema={LoginSchema}
              className="w-1/2"
              onSubmit={handleLogin}
              initialValues={{
                username: "bjoern.rave@gmail.com",
                password: "Admin123",
              }}
            >
              <TextInput autoFocus name="username" label="Benutzername" />

              <PasswordInput type="password" name="password" label="Passwort" />
              <SubmitButton>Anmelden</SubmitButton>
            </Form>
          </>
        )}
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )

  if (!session?.user) {
    return {
      props: {},
    }
  }

  const availableLinks = getEligibleRoutes({
    permissions: session.user.permissions,
  }).reduce((prev, next) => {
    return [...prev, ...next.routes]
  }, [])

  return {
    redirect: {
      destination: availableLinks[0]
        ? `/dashboard${availableLinks[0].href}`
        : "/dashboard/windfarms",
      permanent: false,
    },
    props: {},
  }
}

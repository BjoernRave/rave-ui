import Loader from "components/Blocks/Loader"
import Meta from "components/Blocks/Meta"
import { LoginSchema } from "lib/zod-schema"
import { NextPage } from "next"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { Toaster } from "react-hot-toast"
import { Form, PasswordInput, SubmitButton, TextInput } from "../rave-ui"

const Home: NextPage = () => {
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
              initialValues={{ username: "test@test.de", password: "test12" }}
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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const cookies = parseCookies(context.req)

//   const isRealm = checkIsRealm(context.req.headers.host)

//   if (cookies[AUTH_TOKEN_ID]) {
//     const data = JSON.parse(decodeURIComponent(cookies[AUTH_TOKEN_ID]))

//     if (data?.license === null || data?.license === undefined) {
//       return {
//         props: {},
//       }
//     }

//     const availableLinks = getEligibleRoutes({
//       isRealm,
//       roles: data.roles,
//       license: data?.license,
//     }).reduce((prev, next) => {
//       return [...prev, ...next.routes]
//     }, [])

//     return {
//       redirect: {
//         destination: availableLinks[0] ? availableLinks[0].href : '/stationen',
//         permanent: false,
//       },
//       props: {},
//     }
//   }

//   return {
//     props: {},
//   }
// }

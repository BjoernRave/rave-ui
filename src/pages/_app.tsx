// src/pages/_app.tsx
import Sidebar from "components/Blocks/Sidebar"
import { GeneralContextProvider, useGeneral } from "lib/GeneralContext"
import { trpc } from "lib/trpc"
import { muiTheme } from "lib/utils"
import { SessionProvider } from "next-auth/react"
import { useRouter } from "next/router"
import { FC } from "react"
import { Toaster } from "react-hot-toast"
import { AppWrapper } from "../rave-ui"
import "../styles/globals.css"

export const outsideRoutes = ["/"]

const OuterLayout: FC = ({ children }) => {
  const { sidebarOpen, setSidebarOpen } = useGeneral()
  const { pathname } = useRouter()

  if (outsideRoutes.includes(pathname) || pathname.indexOf("pdf") !== -1) {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {children}
    </div>
  )
}

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
  emotionCache,
}) => {
  return (
    <GeneralContextProvider>
      <AppWrapper emotionCache={emotionCache} theme={muiTheme}>
        <SessionProvider session={session}>
          <Toaster />
          <OuterLayout>
            <Component {...pageProps} />
          </OuterLayout>
        </SessionProvider>
      </AppWrapper>
    </GeneralContextProvider>
  )
}

export default trpc.withTRPC(MyApp)

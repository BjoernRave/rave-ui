import { IconButton, SwipeableDrawer, Tooltip } from "@mui/material"
import { getEligibleRoutes } from "lib/routes"
import { isIOS } from "lib/utils"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Dispatch, FC, SetStateAction, useMemo } from "react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Sidebar: FC<Props> = ({ sidebarOpen, setSidebarOpen }) => {
  const router = useRouter()
  const { data } = useSession()

  const toggleDrawer = (open) => (event) => {
    if (
      event?.type === "keydown" &&
      (event?.key === "Tab" || event?.key === "Shift")
    ) {
      return
    }

    setSidebarOpen(!sidebarOpen)
  }

  const allNavItems = useMemo(() => getEligibleRoutes({ roles: [] }), [])

  const TopBar = () => {
    return (
      <div className="mt-2 flex w-full  items-center justify-between px-2">
        <p className="text-center text-white">{data.user.email}</p>
        <div className="flex justify-between py-2">
          <div>
            <Tooltip title="Logout">
              <IconButton
                onClick={() => signOut({ callbackUrl: "/" })}
                size="large"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!isIOS}
        disableDiscovery={isIOS}
        onOpen={toggleDrawer(true)}
        PaperProps={{ style: { border: "none" } }}
        anchor={"left"}
        open={sidebarOpen}
        onClose={toggleDrawer(false)}
      >
        <div
          className={`relative flex w-full max-w-xs flex-1 flex-col bg-primary-500 pt-5 pb-32`}
        >
          <div className={`bg-transaprent flex flex-shrink-0 items-center p-4`}>
            <img alt="Logo" src={"/logo.png"} height={32} width={180} />
          </div>
          <TopBar />
          <nav
            className="h-full flex-shrink-0 overflow-y-auto"
            aria-label="Sidebar"
          >
            {allNavItems.map(({ routes, name }) => {
              return (
                <div key={name}>
                  <span className="group flex items-center rounded-md px-2 py-2 text-lg font-bold leading-6 text-white">
                    {name}
                  </span>
                  <div className="ml-3 space-y-0.5 px-2 ">
                    {routes.map((item) => {
                      const isActive =
                        router.pathname.substring(0, item.href.length) ===
                        `/dashboard${item.href}`

                      return (
                        <Link
                          onClick={() => setSidebarOpen(false)}
                          className={classNames(
                            isActive
                              ? `bg-primary-700`
                              : `hover:bg-primary-700`,
                            "group flex items-center rounded-md px-2 py-2 text-sm leading-6  text-white no-underline"
                          )}
                          aria-current={isActive ? "page" : undefined}
                          scroll={false}
                          key={item.name}
                          href={`/dashboard${item.href}`}
                        >
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </nav>
        </div>
      </SwipeableDrawer>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex w-64 flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div
            className={`flex flex-grow flex-col overflow-y-auto bg-primary-500 pt-2 pb-4`}
          >
            <div
              className={`mx-2 flex flex-shrink-0 items-center justify-center px-4 py-2`}
            >
              <img alt="Logo" src={"/logo.png"} height={32} width={180} />
            </div>
            <TopBar />

            <nav
              className="flex flex-1 flex-col overflow-y-auto"
              aria-label="Sidebar"
            >
              {allNavItems.map(({ routes, name }) => {
                return (
                  <div key={name}>
                    <span className="group flex items-center rounded-md px-2 py-2 text-lg font-bold leading-6 text-white">
                      {name}
                    </span>
                    <div className="ml-3 space-y-0.5 px-2">
                      {routes.map((item) => {
                        const isActive =
                          router.pathname === `/dashboard${item.href}`

                        return (
                          <Link
                            style={{ fontSize: 16 }}
                            className={classNames(
                              isActive
                                ? `bg-primary-700`
                                : `hover:bg-primary-700`,
                              "group flex  items-center rounded-md px-2 py-2  leading-6  text-white no-underline"
                            )}
                            aria-current={isActive ? "page" : undefined}
                            scroll={false}
                            key={item.name}
                            href={`/dashboard${item.href}`}
                          >
                            {item.name}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar

interface Props {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
  sidebarOpen: boolean
}

import { useGeneral } from "lib/GeneralContext"
import { FC, ReactNode } from "react"

export const HEADER_HEIGHT = 46

const Header: FC<Props> = ({ title, titleComponent }) => {
  const { setSidebarOpen } = useGeneral()

  return (
    <div
      className={`header no-print fixed top-0 z-10 flex flex-shrink-0 border-b border-gray-200 bg-white lg:border-none`}
    >
      <button
        className=" border-r border-gray-200 bg-transparent text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        style={{ width: "calc(100% - 60px)" }}
        className={titleComponent ? "py-1" : "py-2"}
      >
        {titleComponent ? (
          titleComponent
        ) : (
          <h1 className="ml-2 self-center text-base font-bold md:text-2xl">
            {title}
          </h1>
        )}
      </div>
    </div>
  )
}

export default Header

interface Props {
  title: string
  titleComponent?: ReactNode
}

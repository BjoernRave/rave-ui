import { FC, ReactNode } from "react"
import Header, { HEADER_HEIGHT } from "./Header"
import Meta from "./Meta"

const Layout: FC<Props> = ({ children, title, titleComponent }) => {
  return (
    <>
      <Meta title={title} />
      <div
        id="scroll-wrapper"
        style={{ marginTop: HEADER_HEIGHT }}
        className={`h-full flex-1 overflow-auto pb-16 focus:outline-none`}
      >
        <Header titleComponent={titleComponent} title={title} />
        <div className="mt-1">{children}</div>
      </div>
    </>
  )
}

export default Layout

interface Props {
  title: string
  titleComponent?: ReactNode
}

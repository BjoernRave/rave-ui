import { Divider } from "@mui/material"
import { FC } from "react"

const Section: FC<Props> = ({ title, children }) => {
  return (
    <div>
      {title && <p className="my-2 ml-2 text-2xl font-bold">{title}</p>}
      {children}
      <Divider className="mt-2" />
    </div>
  )
}

export default Section

interface Props {
  title?: string
}

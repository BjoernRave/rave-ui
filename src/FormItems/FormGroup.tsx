import { Divider } from "@mui/material"
import { FC, PropsWithChildren } from "react"

const FormGroup: FC<PropsWithChildren<Props>> = ({
  children,
  hideBottom,
  hideTop,
}) => {
  return (
    <>
      {!hideTop && <Divider style={{ marginTop: 30 }} className=" w-full" />}
      {children}
      {!hideBottom && (
        <Divider style={{ marginBottom: 30 }} className=" w-full" />
      )}
    </>
  )
}

export default FormGroup

interface Props {
  hideTop?: boolean
  hideBottom?: boolean
}

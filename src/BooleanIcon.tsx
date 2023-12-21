import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import { FC } from "react"

const BooleanIcon: FC<Props> = ({ value }) => {
  return value ? <CheckIcon /> : <CloseIcon />
}

export default BooleanIcon

interface Props {
  value: boolean
}

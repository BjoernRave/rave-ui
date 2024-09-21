import { Button, type ButtonProps, CircularProgress } from "@mui/material"
import type { FC, PropsWithChildren } from "react"
import { useFormContext } from "react-hook-form"

const SubmitButton: FC<PropsWithChildren<Props>> = ({ children, ...rest }) => {
  const { formState } = useFormContext()
  return (
    <Button {...rest} type={"submit"}>
      {formState.isSubmitting ? (
        <CircularProgress className="text-white" size={24} />
      ) : (
        <span>{children}</span>
      )}
    </Button>
  )
}

export default SubmitButton

export interface Props extends ButtonProps {}

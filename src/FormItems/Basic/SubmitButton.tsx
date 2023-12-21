import { LoadingButton, LoadingButtonProps } from "@mui/lab"
import { FC, PropsWithChildren } from "react"
import { useFormContext } from "react-hook-form"

const SubmitButton: FC<PropsWithChildren<Props>> = ({ children, ...rest }) => {
  const { formState } = useFormContext()
  return (
    <LoadingButton {...rest} loading={formState.isSubmitting} type={"submit"}>
      <span>{children}</span>
    </LoadingButton>
  )
}

export default SubmitButton

export interface Props extends LoadingButtonProps {}

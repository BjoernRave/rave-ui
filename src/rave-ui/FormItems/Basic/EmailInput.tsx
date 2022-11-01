import { generateSlug } from "@inventhora/utils"
import { BaseTextFieldProps, TextField } from "@mui/material"
import { FC } from "react"
import { InputProps } from "../../lib/types"
import { useField } from "./Form"

const EmailInput: FC<Props> = ({
  name,
  index,
  subName,
  helperText,
  error,
  variant = "outlined",
  ...rest
}) => {
  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useField(formName)

  return (
    <TextField
      margin="dense"
      size="small"
      id={generateSlug(formName)}
      style={{ width: "100%" }}
      {...rest}
      {...field}
      type="email"
      variant={variant as any}
      helperText={fieldState.error ?? helperText}
      error={Boolean(fieldState.error) || error}
    />
  )
}

export default EmailInput

export interface Props
  extends InputProps,
    Omit<BaseTextFieldProps, "name" | "label"> {}

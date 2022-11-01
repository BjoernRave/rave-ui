import { generateSlug } from "@inventhora/utils"
import { BaseTextFieldProps, TextField } from "@mui/material"
import { FC } from "react"
import { InputProps } from "../../lib/types"
import { useField } from "./Form"

const TextAreaInput: FC<Props> = ({
  name,
  subName,
  index,
  helperText,
  error,
  variant = "outlined",
  rows = 4,
  ...rest
}) => {
  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useField(formName)

  return (
    <TextField
      id={generateSlug(formName)}
      {...rest}
      {...field}
      type="text"
      margin="dense"
      size="small"
      style={{ width: "100%" }}
      multiline
      rows={String(rows)}
      variant={variant as any}
      helperText={fieldState.error ?? helperText}
      error={Boolean(fieldState.error) || error}
    />
  )
}

export default TextAreaInput

export interface Props
  extends InputProps,
    Omit<BaseTextFieldProps, "name" | "label"> {
  rows?: number
}

import { BaseTextFieldProps, TextField } from "@mui/material"
import { FC } from "react"
import { useController } from "react-hook-form"
import { generateSlug } from "../../lib/misc"
import { InputProps } from "../../lib/types"
import { useIsRequired } from "./SchemaContext"

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
  const isRequired = useIsRequired(formName)

  const { field, fieldState } = useController({ name: formName })

  return (
    <TextField
      id={generateSlug(formName)}
      {...rest}
      {...field}
      type="text"
      required={isRequired}
      style={{ width: "100%" }}
      multiline
      rows={String(rows)}
      variant={variant as any}
      helperText={fieldState.error ? fieldState.error.message : helperText}
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

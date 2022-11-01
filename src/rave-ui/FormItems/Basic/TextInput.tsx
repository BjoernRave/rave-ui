import { generateSlug } from "@inventhora/utils"
import { BaseTextFieldProps, TextField } from "@mui/material"

import { FC } from "react"
import { InputProps } from "../../lib/types"
import { useField } from "./Form"

const TextInput: FC<Props> = ({
  name,
  index,
  subName,
  helperText,
  variant = "outlined",
  style,
  onChange,
  error,
  maxLength,
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
      onChange={(e) => {
        if (maxLength && e.target.value.length > maxLength) {
          return
        }
        field.onChange(e)
        onChange && onChange(e)
      }}
      style={style ?? { width: "100%" }}
      variant={variant as any}
      helperText={fieldState.error ?? helperText}
      error={Boolean(fieldState.error) || error}
    />
  )
}

export default TextInput

export interface Props
  extends InputProps,
    Omit<BaseTextFieldProps, "name" | "label"> {
  InputProps?: any
  onChange?: any
  maxLength?: number
}

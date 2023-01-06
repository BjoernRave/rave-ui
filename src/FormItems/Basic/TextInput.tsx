import { generateSlug } from "@inventhora/utils"
import { BaseTextFieldProps, TextField } from "@mui/material"
import { FC } from "react"
import { useController } from "react-hook-form"
import { InputProps } from "../../lib/types"

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

  const { field, fieldState } = useController({ name: formName })

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
        onChange && onChange(e.target.value)
      }}
      style={style ?? { width: "100%" }}
      variant={variant as any}
      helperText={fieldState.error ? fieldState.error.message : helperText}
      error={Boolean(fieldState.error) || error}
    />
  )
}

export default TextInput

export interface Props
  extends InputProps,
    Omit<BaseTextFieldProps, "name" | "label"> {
  InputProps?: any

  maxLength?: number
}

import { type BaseTextFieldProps, TextField } from "@mui/material"
import type { FC } from "react"
import { useController } from "react-hook-form"
import { generateSlug } from "../../lib/misc"
import type { InputProps } from "../../lib/types"
import { useIsRequired } from "./SchemaContext"

const NumberInput: FC<Props> = ({
  name,
  index,
  subName,
  helperText,
  variant = "outlined",
  allowDecimals,
  onChange,
  style,
  error,
  max,
  allowNegative,
  ...rest
}) => {
  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name
  const isRequired = useIsRequired(formName)

  const { field, fieldState } = useController({ name: formName })

  return (
    <TextField
      required={isRequired}
      id={generateSlug(formName)}
      {...rest}
      value={field.value || ""}
      onChange={(e) => {
        onChange && onChange(e.target.value)
        if (max && Number(e.target.value) > max) {
          return field.onChange({ target: { value: max } })
        }

        field.onChange(e)
      }}
      onKeyDown={(e) => {
        //delete, tab, etc
        if ([8, 9, 37, 39].includes(e.keyCode)) {
          return
        }

        if (allowNegative && e.keyCode === 173) {
          return
        }

        //number keys
        if (e.keyCode >= 48 && e.keyCode <= 57) {
          return
        }

        //numpad
        if (e.keyCode >= 96 && e.keyCode <= 105) {
          return
        }

        if (
          allowDecimals &&
          (e.keyCode === 190 || e.keyCode === 188) &&
          field?.value?.split &&
          field?.value?.split(".")?.length < 2 &&
          field?.value?.split(",")?.length < 2
        ) {
          return
        }
        e.preventDefault()
      }}
      inputMode="numeric"
      type="text"
      style={style ?? { width: "100%" }}
      variant={variant as any}
      helperText={fieldState.error ? fieldState.error.message : helperText}
      error={Boolean(fieldState.error) || error}
    />
  )
}

export default NumberInput

export interface Props
  extends InputProps,
    Omit<BaseTextFieldProps, "name" | "label"> {
  InputProps?: any
  allowDecimals?: boolean
  max?: number
  allowNegative?: boolean
}

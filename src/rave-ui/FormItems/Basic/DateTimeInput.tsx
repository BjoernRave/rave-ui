import { dateTimeFormat, generateSlug } from "@inventhora/utils"
import { TextField } from "@mui/material"
import { DateTimePicker } from "@mui/x-date-pickers-pro"
import { FC } from "react"
import { useLocale } from "../../AppWrapper"
import { InputProps, Language } from "../../lib/types"
import DateTimeProvider from "./DateTimeProvider"
import { useField } from "./Form"

const DateTimeInput: FC<Props> = ({
  name,
  index,
  subName,
  label,
  helperText,
  required,
  disabled,
}) => {
  const { lang } = useLocale()

  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useField(formName)

  return (
    <DateTimeProvider lang={lang as Language}>
      <DateTimePicker
        value={field.value ?? null}
        onChange={(date) => field.onChange({ target: { value: date || null } })}
        disabled={disabled}
        ampm={false}
        mask="__.__.____ __:__"
        inputFormat={dateTimeFormat}
        label={label}
        renderInput={(props) => {
          return (
            <TextField
              margin="dense"
              size="small"
              {...props}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error ?? helperText}
              required={required}
              style={{ width: "100%" }}
              id={generateSlug(formName)}
            />
          )
        }}
      />
    </DateTimeProvider>
  )
}

export default DateTimeInput

export interface Props extends InputProps {
  disabled?: boolean
}

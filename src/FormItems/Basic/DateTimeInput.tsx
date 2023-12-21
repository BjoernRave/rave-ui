import { DateTimePicker, DateTimePickerProps } from "@mui/x-date-pickers-pro"
import { FC } from "react"
import { useController } from "react-hook-form"
import { dateTimeFormat } from "../../lib/date"
import { useLocale } from "../../lib/theme"
import { InputProps, Language } from "../../lib/types"
import DateTimeProvider from "./DateTimeProvider"
import { useIsRequired } from "./SchemaContext"

const DateTimeInput: FC<Props> = ({
  name,
  index,
  subName,
  label,
  helperText,
  onChange,
  disabled,
  ...props
}) => {
  const { lang } = useLocale()

  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name
  const isRequired = useIsRequired(formName)

  const { field, fieldState } = useController({ name: formName })

  return (
    <DateTimeProvider lang={lang as Language}>
      <DateTimePicker
        {...props}
        value={field.value ?? null}
        onChange={(date) => {
          field.onChange({ target: { value: date || null } })
          onChange && onChange(date)
        }}
        disabled={disabled}
        ampm={false}
        format={dateTimeFormat}
        slotProps={{
          textField: {
            error: Boolean(fieldState.error),
            required: isRequired,
            helperText: fieldState.error
              ? fieldState.error.message
              : helperText,
          },
        }}
        label={label}
      />
    </DateTimeProvider>
  )
}

export default DateTimeInput

export interface Props
  extends InputProps,
    Omit<DateTimePickerProps<any>, "label" | "onChange"> {
  disabled?: boolean
}

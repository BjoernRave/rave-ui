import { TimePicker, TimePickerProps } from "@mui/x-date-pickers-pro"
import { FC } from "react"
import { useController } from "react-hook-form"
import { timeFormat } from "../../lib/date"
import { useLocale } from "../../lib/theme"
import { InputProps, Language } from "../../lib/types"
import DateTimeProvider from "./DateTimeProvider"
import { useIsRequired } from "./SchemaContext"

const TimeInput: FC<Props> = ({
  name,
  index,
  subName,
  label,
  helperText,
  required,
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
      <TimePicker
        {...props}
        value={field.value ?? null}
        onChange={(date) => {
          field.onChange({ target: { value: date || null } })
          onChange && onChange(date)
        }}
        disabled={disabled}
        ampm={false}
        format={timeFormat}
        label={label}
        slotProps={{
          textField: {
            style: {
              width: "100%",
            },
            required: isRequired,
            error: Boolean(fieldState.error),
            helperText: fieldState.error
              ? fieldState.error.message
              : helperText,
          },
        }}
      />
    </DateTimeProvider>
  )
}

export default TimeInput

export interface Props
  extends InputProps,
    Omit<TimePickerProps<any>, "label" | "onChange"> {
  disabled?: boolean
}

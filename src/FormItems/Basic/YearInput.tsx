import { DatePicker, type DatePickerProps } from "@mui/x-date-pickers-pro"
import { useController } from "react-hook-form"
import { useLocale } from "../../lib/theme"
import type { InputProps, Language } from "../../lib/types"
import DateTimeProvider from "./DateTimeProvider"
import { useIsRequired } from "./SchemaContext"

export default function YearInput({
  label,
  name,
  index,
  subName,
  helperText,
  disabled,
  ...props
}: Props) {
  const { lang } = useLocale()
  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name
  const isRequired = useIsRequired(formName)
  const { field, fieldState } = useController({ name: formName })

  return (
    <DateTimeProvider lang={lang as Language}>
      <DatePicker
        {...props}
        disabled={disabled}
        closeOnSelect
        label={label}
        value={field.value ?? null}
        views={["year"]}
        onChange={(year) => field.onChange({ target: { value: year } })}
        slotProps={{
          textField: {
            style: {
              width: "100%",
            },
            InputProps: {
              value:
                field.value === null
                  ? ""
                  : new Date(field.value)?.getFullYear?.(),
            },
            FormHelperTextProps: { style: { display: "none" } },
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

interface Props
  extends InputProps,
    Omit<DatePickerProps<any>, "label" | "onChange"> {
  disabled?: boolean
}

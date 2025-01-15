import { DatePicker, type DatePickerProps } from "@mui/x-date-pickers-pro"
import { format } from "date-fns"
import { useController } from "react-hook-form"
import { useLocale } from "../../lib/theme"
import type { InputProps, Language } from "../../lib/types"
import DateTimeProvider, { localeMap } from "./DateTimeProvider"
import { useIsRequired } from "./SchemaContext"

export default function YearInput({
  label,
  name,
  index,
  subName,
  helperText,
}: Props) {
  const { lang } = useLocale()
  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name
  const isRequired = useIsRequired(formName)
  const { field, fieldState } = useController({ name: formName })

  return (
    <DateTimeProvider lang={lang as Language}>
      <DatePicker
        label={label}
        closeOnSelect
        value={field.value ?? null}
        views={["month", "year"]}
        onChange={(month) => field.onChange({ target: { value: month } })}
        slotProps={{
          textField: {
            style: {
              width: "100%",
            },
            InputProps: {
              value:
                field.value === null
                  ? ""
                  : format(new Date(field.value), "MMMM yyyy", {
                      locale: localeMap[lang],
                    }),
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

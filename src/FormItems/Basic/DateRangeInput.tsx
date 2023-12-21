import { DateRangePickerProps } from "@mui/lab"
import { FormControl, FormHelperText, FormLabel } from "@mui/material"
import { DateRangePicker } from "@mui/x-date-pickers-pro"
import { FC } from "react"
import { useController } from "react-hook-form"
import { useLocale } from "../../lib/theme"
import { InputProps, Language } from "../../lib/types"
import DateTimeProvider from "./DateTimeProvider"

const DateRangeInput: FC<Props> = ({
  subName,
  name,
  label,
  helperText,
  onChange,
  index,
  ...props
}) => {
  const { lang } = useLocale()
  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useController({ name: formName })

  return (
    <FormControl
      style={{ width: "100%" }}
      className="my-2"
      error={Boolean(fieldState.error)}
    >
      <FormLabel>{label}</FormLabel>
      <DateTimeProvider lang={lang as Language}>
        <DateRangePicker
          {...props}
          slotProps={{
            textField: {
              style: { marginTop: 0 },
              error: Boolean(fieldState.error),
            },
          }}
          className="mt-2"
          onChange={(dateRange) => {
            field.onChange({ target: { value: dateRange } })
            onChange && onChange(dateRange)
          }}
          value={field.value ?? [null, null]}
        />
      </DateTimeProvider>
      <FormHelperText>
        {fieldState.error ? fieldState.error.message : helperText}
      </FormHelperText>
    </FormControl>
  )
}

export default DateRangeInput

interface Props
  extends InputProps,
    Omit<DateRangePickerProps, "label" | "onChange"> {}

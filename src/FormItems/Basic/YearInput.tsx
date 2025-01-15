import { FormControl, FormHelperText } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers-pro"
import { useController } from "react-hook-form"
import { useLocale } from "../../lib/theme"
import type { InputProps, Language } from "../../lib/types"
import DateTimeProvider from "./DateTimeProvider"

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

  const { field, fieldState } = useController({ name: formName })

  return (
    <FormControl
      style={{ width: "100%" }}
      className="my-2"
      error={Boolean(fieldState.error)}
    >
      <DateTimeProvider lang={lang as Language}>
        <DatePicker
          closeOnSelect
          label={label}
          value={field.value ?? null}
          views={["year"]}
          onChange={(year) => field.onChange({ target: { value: year } })}
          slotProps={{
            textField: {
              size: "small",
              InputProps: {
                value:
                  field.value === null
                    ? ""
                    : new Date(field.value)?.getFullYear?.(),
              },
              FormHelperTextProps: { style: { display: "none" } },
            },
          }}
        />
      </DateTimeProvider>
      <FormHelperText>
        {fieldState.error ? fieldState.error.message : helperText}
      </FormHelperText>
    </FormControl>
  )
}

interface Props extends InputProps {}

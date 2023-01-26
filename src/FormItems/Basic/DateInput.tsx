import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers-pro'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { dateFormat } from '../../lib/date'
import { generateSlug } from '../../lib/misc'
import { useLocale } from '../../lib/theme'
import { InputProps, Language } from '../../lib/types'
import DateTimeProvider from './DateTimeProvider'

const DateInput: FC<Props> = ({
  name,
  index,
  subName,
  label,
  helperText,
  required,
  onChange,
  disabled,
}) => {
  const { lang } = useLocale()

  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useController({ name: formName })

  return (
    <DateTimeProvider lang={lang as Language}>
      <DatePicker
        disabled={disabled}
        value={field.value ?? null}
        onChange={(date: any) => {
          if (!date) {
            return field.onChange({ target: { value: null } })
          }
          onChange && onChange(date)
          date.setHours(0)
          date.setMinutes(0)
          date.setSeconds(0)
          date.setMilliseconds(0)

          field.onChange({ target: { value: date } })
        }}
        mask="__.__.____"
        inputFormat={dateFormat}
        label={label}
        renderInput={(props) => (
          <TextField
            margin="dense"
            size="small"
            {...props}
            error={Boolean(fieldState.error)}
            helperText={
              fieldState.error ? fieldState.error.message : helperText
            }
            required={required}
            style={{ width: '100%' }}
            id={generateSlug(formName)}
          />
        )}
      />
    </DateTimeProvider>
  )
}

export default DateInput

export interface Props extends InputProps {
  disabled?: boolean
}

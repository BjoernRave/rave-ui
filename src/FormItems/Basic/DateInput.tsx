import { DatePicker } from '@mui/x-date-pickers-pro'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { dateFormat } from '../../lib/date'
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
        format={dateFormat}
        label={label}
      />
    </DateTimeProvider>
  )
}

export default DateInput

export interface Props extends InputProps {
  disabled?: boolean
}

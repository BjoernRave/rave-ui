import { DatePicker, DatePickerProps } from '@mui/x-date-pickers-pro'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { dateFormat } from '../../lib/date'
import { useLocale } from '../../lib/theme'
import { InputProps, Language } from '../../lib/types'
import DateTimeProvider from './DateTimeProvider'
import { useIsRequired } from './SchemaContext'

const DateInput: FC<Props> = ({
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
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name
  const isRequired = useIsRequired(formName)
  const { field, fieldState } = useController({ name: formName })

  return (
    <DateTimeProvider lang={lang as Language}>
      <DatePicker
        {...props}
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
        slotProps={{
          textField: {
            style: {
              width: '100%',
            },
            required: isRequired,
            size: 'small',
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

export default DateInput
export interface Props
  extends InputProps,
    Omit<DatePickerProps<any>, 'label' | 'onChange'> {
  disabled?: boolean
}

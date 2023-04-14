import { TimePicker } from '@mui/x-date-pickers-pro'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { timeFormat } from '../../lib/date'
import { useLocale } from '../../lib/theme'
import { InputProps, Language } from '../../lib/types'
import DateTimeProvider from './DateTimeProvider'

const TimeInput: FC<Props> = ({
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
      <TimePicker
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
              width: '100%',
            },
            size: 'small',
          },
        }}
      />
    </DateTimeProvider>
  )
}

export default TimeInput

export interface Props extends InputProps {
  disabled?: boolean
}

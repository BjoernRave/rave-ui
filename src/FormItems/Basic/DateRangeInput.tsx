import { FormControl, FormHelperText, FormLabel } from '@mui/material'
import { DateRangeCalendar } from '@mui/x-date-pickers-pro'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { useLocale } from '../../lib/theme'
import { InputProps, Language } from '../../lib/types'
import DateTimeProvider from './DateTimeProvider'

const DateRangeInput: FC<Props> = ({
  subName,
  name,
  label,
  helperText,
  onChange,
  index,
}) => {
  const { lang } = useLocale()
  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useController({ name: formName })

  return (
    <FormControl error={Boolean(fieldState.error)}>
      <FormLabel>{label}</FormLabel>
      <DateTimeProvider lang={lang as Language}>
        <DateRangeCalendar
          onChange={(dateRange) => {
            field.onChange({ target: { value: dateRange } })
            onChange && onChange(dateRange)
          }}
          value={field.value ?? [null, null]}
        />
      </DateTimeProvider>
      <FormHelperText margin="dense">
        {fieldState.error ? fieldState.error.message : helperText}
      </FormHelperText>
    </FormControl>
  )
}

export default DateRangeInput

interface Props extends InputProps {}

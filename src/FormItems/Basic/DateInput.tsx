import { dateFormat, generateSlug } from '@inventhora/utils'
import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers-pro'
import { useField } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import React, { FC, ReactNode } from 'react'
import { Language } from '../../lib/types'
import DateTimeProvider from './DateTimeProvider'

const DateInput: FC<Props> = ({
  name,
  index,
  subName,
  label,
  helperText,
  required,
  disabled,
}) => {
  const { lang } = useTranslation()

  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name

  const [, meta, helper] = useField(formName)

  return (
    <DateTimeProvider lang={lang as Language}>
      <DatePicker
        disabled={disabled}
        value={meta.value ?? null}
        onChange={(date: any) => {
          if (!date) {
            return helper.setValue(null)
          }

          date.setHours(0)
          date.setMinutes(0)
          date.setSeconds(0)
          date.setMilliseconds(0)

          helper.setValue(date)
        }}
        mask="__.__.____"
        inputFormat={dateFormat}
        label={label}
        renderInput={(props) => (
          <TextField
            margin="dense"
            size="small"
            {...props}
            error={Boolean(meta.error)}
            helperText={meta.error ?? helperText}
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

export interface Props {
  name?: string
  index?: number
  subName?: string
  label: ReactNode
  helperText?: ReactNode
  required?: boolean
  disabled?: boolean
}

import { dateTimeFormat, generateSlug } from '@inventhora/utils'
import { TextField } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers-pro'
import { useField } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import React, { FC, ReactNode } from 'react'
import { Language } from '../../lib/types'
import DateTimeProvider from './DateTimeProvider'

const DateTimeInput: FC<Props> = ({
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
      <DateTimePicker
        value={meta.value ?? null}
        onChange={(date) => helper.setValue(date || null)}
        disabled={disabled}
        ampm={false}
        mask="__.__.____ __:__"
        inputFormat={dateTimeFormat}
        label={label}
        renderInput={(props) => {
          return (
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
          )
        }}
      />
    </DateTimeProvider>
  )
}

export default DateTimeInput

export interface Props {
  name: string
  index?: number
  subName?: string
  label: ReactNode
  helperText?: ReactNode
  required?: boolean
  disabled?: boolean
}

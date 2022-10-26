import { generateSlug } from '@inventhora/utils'
import { BaseTextFieldProps, TextField } from '@mui/material'
import { useField } from 'formik'
import React, { FC } from 'react'

const EmailInput: FC<Props> = ({
  name,
  index,
  subName,
  helperText,
  error,
  variant = 'outlined',
  ...rest
}) => {
  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name

  const [field, meta] = useField(formName)

  return (
    <TextField
      margin="dense"
      size="small"
      id={generateSlug(formName)}
      style={{ width: '100%' }}
      {...rest}
      {...field}
      type="email"
      variant={variant as any}
      helperText={meta.error ?? helperText}
      error={Boolean(meta.error) || error}
    />
  )
}

export default EmailInput

export interface Props extends BaseTextFieldProps {
  name: string
  index?: number
  subName?: string
}

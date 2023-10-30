import { BaseTextFieldProps, TextField } from '@mui/material'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { generateSlug } from '../../lib/misc'
import { InputProps } from '../../lib/types'
import { useIsRequired } from './SchemaContext'

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
  const isRequired = useIsRequired(formName)

  const { field, fieldState } = useController({ name: formName })

  return (
    <TextField
      required={isRequired}
      id={generateSlug(formName)}
      style={{ width: '100%' }}
      {...rest}
      {...field}
      type="email"
      variant={variant as any}
      helperText={fieldState.error ? fieldState.error.message : helperText}
      error={Boolean(fieldState.error) || error}
    />
  )
}

export default EmailInput

export interface Props
  extends InputProps,
    Omit<BaseTextFieldProps, 'name' | 'label'> {}

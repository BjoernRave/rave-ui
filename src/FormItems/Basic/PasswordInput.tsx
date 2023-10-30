import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import {
  BaseTextFieldProps,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from '@mui/material'
import { FC, useState } from 'react'
import { useController } from 'react-hook-form'
import { generateSlug } from '../../lib/misc'
import { useLocale } from '../../lib/theme'
import { InputProps } from '../../lib/types'
import { useIsRequired } from './SchemaContext'

const PasswordInput: FC<Props> = ({
  name,
  index,
  subName,
  helperText,
  error,
  style,
  variant = 'outlined',
  maxLength,
  onChange,
  ...rest
}) => {
  const { locales } = useLocale()

  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name

  const isRequired = useIsRequired(formName)
  const [showPassword, setShowPassword] = useState(false)

  const { field, fieldState } = useController({ name: formName })

  return (
    <TextField
      required={isRequired}
      id={generateSlug(formName)}
      {...rest}
      {...field}
      onChange={(e) => {
        if (maxLength && e.target.value.length > maxLength) {
          return
        }
        field.onChange(e)
        onChange && onChange(e.target.value)
      }}
      style={style ?? { width: '100%' }}
      type={showPassword ? 'text' : 'password'}
      variant={variant as any}
      helperText={fieldState.error ? fieldState.error.message : helperText}
      error={Boolean(fieldState.error) || error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip
              title={showPassword ? locales.hidePassword : locales.showPassword}
            >
              <IconButton
                tabIndex={-1}
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={(e) => e.preventDefault()}
                size="large"
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default PasswordInput

export interface Props
  extends InputProps,
    Omit<BaseTextFieldProps, 'name' | 'label'> {
  maxLength?: number
}

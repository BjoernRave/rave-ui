import {
  FormControl,
  FormHelperText,
  FormLabel,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { generateSlug } from '../../lib/misc'
import { InputProps, Option } from '../../lib/types'

const ButtonGroupInput: FC<Props> = ({
  options,
  name,
  subName,
  index,
  label,
  helperText,
  required,
  readOnly,
  onChange,
}) => {
  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useController({ name: formName })

  const id = name ? generateSlug(name) : generateSlug(label)

  return (
    <FormControl
      error={Boolean(fieldState.error)}
      required={required}
      fullWidth
      className="my-2"
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <ToggleButtonGroup
        id={id}
        disabled={readOnly}
        color="primary"
        value={field.value}
        exclusive
        onChange={(e, value) => {
          onChange && onChange(value)
          if (value) {
            field.onChange({ target: { value } })
          }
        }}
      >
        {options.map((o) => {
          const label = typeof o === 'string' ? o : o.label
          const value = typeof o === 'string' ? o : o.value

          return (
            <ToggleButton sx={{ width: '100%' }} key={value} value={value}>
              {label}
            </ToggleButton>
          )
        })}
      </ToggleButtonGroup>

      {(helperText || fieldState.error) && (
        <FormHelperText>
          {fieldState.error ? fieldState.error.message : helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default ButtonGroupInput

interface Props extends InputProps {
  readonly options: (Option | string)[]
  onClick?: (value: string) => void
  value?: string
  size?: 'small' | 'medium' | 'large'
  readOnly?: boolean
}

import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabel,
  FormHelperText,
} from '@mui/material'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { generateSlug } from '../../lib/misc'
import { InputProps } from '../../lib/types'

const BooleanInput: FC<Props> = ({
  name,
  label,
  helperText,
  required,
  index,
  subName,
  onChange,
  ...rest
}) => {
  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useController({ name: formName })

  return (
    <FormControlLabel
      id={generateSlug(name)}
      style={{ alignSelf: 'start', margin: '10px 0' }}
      control={
        <MuiCheckbox
          {...rest}
          checked={field.value}
          {...field}
          onChange={(e) => {
            field.onChange(e)

            onChange && onChange(e.target.value)
          }}
        />
      }
      label={
        <>
          {label}
          {required ? ' *' : ''}
          {(helperText || fieldState.error) && (
            <FormHelperText error={Boolean(fieldState.error)}>
              {fieldState.error ? fieldState.error.message : helperText}
            </FormHelperText>
          )}
        </>
      }
    />
  )
}

export default BooleanInput

export interface Props
  extends InputProps,
    Omit<CheckboxProps, 'name' | 'label' | 'onChange'> {}

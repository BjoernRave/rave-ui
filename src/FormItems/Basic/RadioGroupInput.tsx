import { FormHelperText, FormLabel } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { InputProps, Option } from '../../lib/types'

const RadioGroupInput: FC<Props> = ({
  name,
  label,
  index,
  onChange,
  helperText,
  options,
  subName,
  style,
  ...props
}) => {
  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useController({ name: formName })

  return (
    <FormControl
      error={Boolean(fieldState.error)}
      style={style ?? { width: '100%' }}
    >
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        {...field}
        onChange={(e) => {
          field.onChange(e)
          onChange?.(e.target.value)
        }}
        {...props}
      >
        {options.map((g) => (
          <FormControlLabel
            sx={{
              borderRadius: '10px',
              p: 1,
              background: 'white',
              border: '1px solid #e4e6eb',
              boxShadow:
                '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              '&:hover': { backgroundColor: '#f3f4f6' },
            }}
            style={{ margin: '3px 0' }}
            key={g.value}
            value={g.value}
            control={<Radio />}
            label={g.label}
          />
        ))}
      </RadioGroup>
      <FormHelperText>
        {fieldState.error ? fieldState.error.message : helperText}
      </FormHelperText>
    </FormControl>
  )
}

export default RadioGroupInput

interface Props
  extends InputProps,
    Omit<RadioGroupProps, 'name' | 'label' | 'onChange'> {
  options: Option[]
}

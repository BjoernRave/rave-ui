import {
  FormControl,
  FormHelperText,
  FormLabel,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import { FC, useId } from 'react'
import { Option } from './lib/types'

const ButtonGroup: FC<Props> = ({
  options,
  label,
  helperText,
  value,
  size,
  className,
  onClick,
}) => {
  const id = useId()

  return (
    <FormControl className={className} fullWidth>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <ToggleButtonGroup
        id={id}
        size={size}
        color="primary"
        value={value}
        exclusive
        onChange={(e, val) => {
          if (val) {
            onClick(val)
          }
        }}
      >
        {options.map((o) => (
          <ToggleButton
            size={size}
            sx={{ width: '100%' }}
            key={o.value}
            value={o.value}
          >
            {o.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default ButtonGroup

interface Props {
  options: Option[]
  onClick?: (value: string) => void
  value?: string
  size?: 'small' | 'medium' | 'large'
  label?: string
  helperText?: string
  className?: string
}

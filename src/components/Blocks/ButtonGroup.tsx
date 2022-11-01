import { Button, ButtonGroup as MuiButtonGroup } from '@mui/material'
import { FC } from 'react'

const ButtonGroup: FC<Props> = ({ onChange, value, options, className }) => {
  return (
    <MuiButtonGroup
      variant='contained'
      className={className}
      aria-label='outlined primary button group'>
      {options.map((o) => (
        <Button
          disabled={value === o.value}
          key={o.value}
          onClick={() => onChange(o.value)}>
          {o.label}
        </Button>
      ))}
    </MuiButtonGroup>
  )
}

export default ButtonGroup

interface Props {
  options: { label: string; value: string | number }[]
  onChange: (value: string | number) => void
  value: string
  className?: string
}

import { Button, CircularProgress } from '@mui/material'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

const SubmitButton: FC<Props> = ({
  children,
  disabled,
  onClick,
  size,
  style,
  startIcon,
  type = 'submit',
  variant = 'contained',
  color = 'primary',
  ...rest
}) => {
  const { formState } = useFormContext()
  return (
    <Button
      {...rest}
      disabled={disabled || formState.isSubmitting}
      variant={variant}
      size={size || 'medium'}
      color={color as any}
      style={style}
      onClick={onClick}
      startIcon={startIcon}
      type={type}
    >
      {formState.isSubmitting ? <CircularProgress size={24} /> : children}
    </Button>
  )
}

export default SubmitButton

type ButtonSize = 'small' | 'medium' | 'large'

export interface Props {
  disabled?: boolean
  onClick?: () => void
  size?: ButtonSize
  style?: any
  startIcon?: any
  variant?: 'text' | 'outlined' | 'contained'
  type?: 'submit' | 'button' | 'reset'
  color?: string
}

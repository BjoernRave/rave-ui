import styled from "@emotion/styled"
import { generateSlug } from "@inventhora/utils"
import {
  Button,
  ButtonGroup as MuiButtonGroup,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@mui/material"
import { FC } from "react"
import { InputProps, Option } from "../../lib/types"
import { useField } from "./Form"

const ButtonWrapper = styled(MuiButtonGroup)`
  margin: 10px 0;

  button {
    flex: 1;
    padding: 20px 0;
  }
`

const ButtonGroup: FC<Props> = ({
  options,
  value,
  name,
  subName,
  index,
  onClick,
  label,
  helperText,
  required,
  size = "large",
}) => {
  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name

  const { field } = useField(formName)

  const id = name ? generateSlug(name) : generateSlug(label)

  return (
    <FormControl required={required} fullWidth>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <ButtonWrapper
        aria-label={label}
        variant="contained"
        size={size}
        color="primary"
        id={id}
      >
        {options.map((option, ind) => {
          return (
            <Button
              disabled={
                (value && value === option.value) ||
                (formName && option.value === field.value)
              }
              key={ind}
              onClick={() => {
                onClick && onClick(option.value)
                formName && field.onChange({ target: { value: option.value } })
              }}
            >
              {option.label}
            </Button>
          )
        })}
      </ButtonWrapper>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default ButtonGroup

interface Props extends InputProps {
  options: Option[]
  onClick?: (value: string) => void
  value?: string
  size?: "small" | "medium" | "large"
}

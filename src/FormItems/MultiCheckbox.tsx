import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material"
import { FC, ReactNode } from "react"
import { useController } from "react-hook-form"
import { InputProps } from "../lib/types"

const MultiCheckbox: FC<Props> = ({
  label,
  helperText,
  name,
  options,
  index,
  subName,
}) => {
  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useController({ name: formName })

  return (
    <FormControl
      error={Boolean(fieldState.error)}
      style={{ width: "100%" }}
      component="fieldset"
      variant="standard"
      className="my-2"
    >
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {options?.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={field.value.includes(option.value)}
                onChange={(e, checked) => {
                  field.onChange({
                    target: {
                      value: checked
                        ? [...field.value, option.value]
                        : field.value.filter((value) => value !== option.value),
                    },
                  })
                }}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
      <FormHelperText>
        {fieldState.error ? fieldState.error.message : helperText}
      </FormHelperText>
    </FormControl>
  )
}

export default MultiCheckbox

interface Props extends InputProps {
  options: { label: ReactNode; value: any }[]
}

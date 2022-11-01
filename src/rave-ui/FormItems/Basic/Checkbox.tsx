import { generateSlug } from "@inventhora/utils"
import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabel,
  FormHelperText,
} from "@mui/material"
import { FC } from "react"
import { InputProps } from "../../lib/types"
import { useField } from "./Form"

const Checkbox: FC<Props> = ({
  name,
  label,
  helperText,
  required,
  index,
  subName,
  ...rest
}) => {
  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useField(formName)

  return (
    <FormControlLabel
      id={generateSlug(name)}
      style={{ alignSelf: "start", margin: "10px 0" }}
      control={<MuiCheckbox {...rest} checked={field.value} {...field} />}
      label={
        <>
          {label}
          {required ? " *" : ""}
          {(helperText || fieldState.error) && (
            <FormHelperText error={Boolean(fieldState.error)}>
              {fieldState.error ?? helperText}
            </FormHelperText>
          )}
        </>
      }
    />
  )
}

export default Checkbox

export interface Props
  extends InputProps,
    Omit<CheckboxProps, "name" | "label"> {}

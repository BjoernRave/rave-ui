import { generateSlug } from "@inventhora/utils"
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material"
import { FC } from "react"
import { InputProps, Option } from "../../lib/types"
import { useField } from "./Form"

const SelectInput: FC<Props> = ({
  options,
  label,
  name,
  helperText,
  required,
  index,
  subName,
  onChange,
  disabledOptions,
  allowEmpty = false,
  ...rest
}) => {
  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useField(formName)

  return (
    <FormControl
      margin="dense"
      size="small"
      error={Boolean(fieldState.error)}
      required={required}
      id={generateSlug(formName)}
      style={{ width: "100%" }}
    >
      <InputLabel margin="dense" id={`${generateSlug(formName)}-label`}>
        {label}
      </InputLabel>
      <Select
        margin="dense"
        size="small"
        label={label}
        labelId={`${generateSlug(formName)}-label`}
        {...rest}
        {...field}
        onChange={(e) => {
          field.onChange(e)
          onChange && onChange(e.target.value)
        }}
      >
        {allowEmpty && (
          <MenuItem value="">
            <em>--</em>
          </MenuItem>
        )}
        {options.map(({ value, label }, ind) => (
          <MenuItem
            disabled={Boolean(
              disabledOptions?.find((option) => option === value)
            )}
            key={ind}
            value={value}
          >
            <span dangerouslySetInnerHTML={{ __html: label }} />
          </MenuItem>
        ))}
      </Select>
      <FormHelperText margin="dense">
        {fieldState.error ?? helperText}
      </FormHelperText>
    </FormControl>
  )
}

export default SelectInput

export interface Props extends InputProps, Omit<SelectProps, "name" | "label"> {
  options: Option[]
  onChange?: (value: any) => void
  disabledOptions?: any[]
  allowEmpty?: boolean
}

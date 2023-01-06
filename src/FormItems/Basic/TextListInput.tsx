import styled from "@emotion/styled"
import { generateSlug } from "@inventhora/utils"
import PlusIcon from "@mui/icons-material/AddCircle"
import {
  Chip,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  InputProps as MuiInputProps,
  OutlinedInput,
  Tooltip
} from "@mui/material"
import { FC, useState } from "react"
import { useController } from "react-hook-form"
import { InputProps } from "../../lib/types"
import { useLocale } from "../../LocaleContext"

const StyledButton = styled(IconButton)<{ hasInput: number }>`
  ${({ hasInput }) =>
    hasInput === 1 ? "color: #3c9f80 !important" : undefined};
  padding: 0;
`

const TextListInput: FC<Props> = ({
  name,
  index,
  label,
  subName,
  helperText,
  style,
  onChange,
  required,
  error,
  maxItems = 999,
  ...rest
}) => {
  const { locales } = useLocale()
  const [input, setInput] = useState("")

  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useController({ name: formName })

  const value = Array.isArray(field.value) ? field.value : []

  const handleAdd = () => {
    if (input && value.length < maxItems) {
      field.onChange({ target: { value: [...value, input] } })
      setInput("")
      onChange && onChange([...value, input])
    }
  }

  return (
    <>
      <FormControl
        margin="dense"
        size="small"
        error={Boolean(fieldState.error) || error}
        required={required}
        style={style ?? { width: "100%" }}
      >
        <InputLabel margin="dense" htmlFor={generateSlug(formName)}>
          {label}
        </InputLabel>
        <OutlinedInput
          margin="dense"
          size="small"
          label={label}
          {...rest}
          endAdornment={
            <InputAdornment position="end">
              <Tooltip
                open={Boolean(input)}
                placement="right"
                arrow
                title={locales.add}
              >
                <StyledButton
                  hasInput={Boolean(input) ? 1 : 0}
                  onClick={() => handleAdd()}
                >
                  <PlusIcon />
                </StyledButton>
              </Tooltip>
            </InputAdornment>
          }
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id={generateSlug(formName)}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && Boolean(input) && value.length < maxItems) {
              e.stopPropagation()
              e.preventDefault()
              handleAdd()
            }
          }}
        />
        <div>
          {value.map((val, ind) => (
            <Chip
              color="primary"
              style={{ margin: "5px" }}
              onDelete={() => {
                const newArray = Array.from(value)
                newArray.splice(value.indexOf(val), 1)
                field.onChange({ target: { value: newArray } })
                onChange && onChange(newArray)
              }}
              key={ind}
              label={val}
            />
          ))}
        </div>
        <FormHelperText>
          {fieldState.error ? fieldState.error.message : helperText}
        </FormHelperText>
      </FormControl>
    </>
  )
}

export default TextListInput

export interface Props
  extends InputProps,
    Omit<MuiInputProps, "name" | "label" | "onChange"> {
  maxItems?: number
}

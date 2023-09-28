import styled from '@emotion/styled'
import PlusIcon from '@mui/icons-material/AddCircle'
import {
  Chip,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  InputProps as MuiInputProps,
  OutlinedInput,
  Tooltip,
} from '@mui/material'
import { FC, useState } from 'react'
import { useController } from 'react-hook-form'
import { generateSlug } from '../../lib/misc'
import { useLocale } from '../../lib/theme'
import { InputProps } from '../../lib/types'
import { useIsRequired } from './SchemaContext'

const StyledButton = styled(IconButton)<{ hasInput: number }>`
  ${({ hasInput }) =>
    hasInput === 1 ? 'color: #3c9f80 !important' : undefined};
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
  canAdd,
  error,
  maxItems = 999,
  onlyNumbers,
  allowDecimals,
  ...rest
}) => {
  const { locales } = useLocale()
  const [input, setInput] = useState('')

  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name
  const isRequired = useIsRequired(formName)

  const { field, fieldState } = useController({ name: formName })

  const value = Array.isArray(field.value) ? field.value : []

  const handleAdd = () => {
    if (canAdd && !canAdd(input)) return

    if (input && value.length < maxItems) {
      field.onChange({ target: { value: [...value, input] } })
      setInput('')
      onChange && onChange([...value, input])
    }
  }

  return (
    <>
      <FormControl
        margin="dense"
        size="small"
        error={Boolean(fieldState.error) || error}
        required={isRequired}
        style={style ?? { width: '100%' }}
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
          onKeyDown={(e) => {
            if (e.keyCode === 13 && Boolean(input) && value.length < maxItems) {
              e.stopPropagation()
              e.preventDefault()
              handleAdd()
            }

            if (!onlyNumbers) return

            //delete, tab, etc
            if ([8, 9, 37, 39].includes(e.keyCode)) {
              return
            }

            //number keys
            if (e.keyCode >= 48 && e.keyCode <= 57) {
              return
            }

            //numpad
            if (e.keyCode >= 96 && e.keyCode <= 105) {
              return
            }

            if (
              allowDecimals &&
              (e.keyCode === 190 || e.keyCode === 188) &&
              field?.value?.split &&
              field?.value?.split('.')?.length < 2 &&
              field?.value?.split(',')?.length < 2
            ) {
              return
            }
            e.preventDefault()
          }}
          inputMode={onlyNumbers ? 'numeric' : undefined}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id={generateSlug(formName)}
        />
        <div>
          {value.map((val, ind) => (
            <Chip
              color="primary"
              style={{ margin: '5px' }}
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
    Omit<MuiInputProps, 'name' | 'label' | 'onChange'> {
  maxItems?: number
  canAdd?: (value: string) => boolean
  onlyNumbers?: boolean
  allowDecimals?: boolean
}

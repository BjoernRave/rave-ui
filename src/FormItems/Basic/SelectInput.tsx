import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { generateSlug } from '../../lib/misc'
import { InputProps, Option } from '../../lib/types'
import { useIsRequired } from './SchemaContext'

const SelectInput: FC<Props> = ({
  options,
  label,
  name,
  helperText,
  index,
  style,
  subName,
  onChange,
  disabledOptions,
  allowEmpty = false,
  ...rest
}) => {
  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name
  const isRequired = useIsRequired(formName)

  const { field, fieldState } = useController({ name: formName })

  return (
    <FormControl
      error={Boolean(fieldState.error)}
      required={isRequired}
      id={generateSlug(formName)}
      style={style ?? { width: '100%' }}
    >
      <InputLabel id={`${generateSlug(formName)}-label`}>{label}</InputLabel>
      <Select
        label={label}
        labelId={`${generateSlug(formName)}-label`}
        {...(rest as any)}
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
        {options.map((option, ind) => {
          const value = typeof option === 'string' ? option : option.value
          const label = typeof option === 'string' ? option : option.label

          return (
            <MenuItem
              disabled={Boolean(
                disabledOptions?.find((option) => option === value)
              )}
              key={ind}
              value={value}
            >
              <span dangerouslySetInnerHTML={{ __html: label }} />
            </MenuItem>
          )
        })}
      </Select>
      <FormHelperText>
        {fieldState.error ? fieldState.error.message : helperText}
      </FormHelperText>
    </FormControl>
  )
}

export default SelectInput

export interface Props
  extends InputProps,
    Omit<SelectProps, 'name' | 'label' | 'onChange'> {
  readonly options: (Option | string)[]
  disabledOptions?: any[]
  allowEmpty?: boolean
}

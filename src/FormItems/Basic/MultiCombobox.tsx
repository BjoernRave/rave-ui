import styled from '@emotion/styled'
import PlusIcon from '@mui/icons-material/AddCircle'
import {
  Autocomplete,
  CircularProgress,
  IconButton,
  Tooltip,
} from '@mui/material'
import TextField from '@mui/material/TextField'
import { FC, useState } from 'react'
import { useController } from 'react-hook-form'
import { generateSlug, getErrorMessage } from '../../lib/misc'
import { useLocale } from '../../lib/theme'
import { InputProps } from '../../lib/types'

const StyledButton = styled(IconButton)<{ hasInput: number }>`
  ${({ hasInput }) =>
    hasInput === 1 ? 'color: #3c9f80 !important' : undefined};
`

const MultiCombobox: FC<Props> = ({
  options,
  label,
  helperText,
  required,
  name,
  getOptionLabel = (option) => option,
  index,
  subName,
  disabled,
  autoFocus,
  loading,
  canCreate = true,
  ...rest
}) => {
  const { locales } = useLocale()

  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useController({ name: formName })

  const [input, setInput] = useState('')
  const isLoading = !disabled && (loading || !Array.isArray(options))

  const value = field.value ?? []

  return (
    <Autocomplete
      multiple
      id={generateSlug(formName)}
      style={{ width: '100%' }}
      {...rest}
      value={field.value || []}
      selectOnFocus
      disabled={disabled}
      freeSolo={canCreate}
      onChange={(_, value) =>
        field.onChange({ target: { value: value || [] } })
      }
      options={
        isLoading || !options
          ? []
          : options.filter(
              (val) =>
                !Boolean(
                  field?.value?.find(
                    (metaVal) => getOptionLabel(val) === getOptionLabel(metaVal)
                  )
                )
            )
      }
      loading={isLoading}
      getOptionLabel={(option) => option?.inputTitle ?? getOptionLabel(option)}
      renderInput={(params) => (
        <TextField
          margin="dense"
          size="small"
          {...params}
          autoFocus={autoFocus}
          label={label}
          disabled={disabled}
          helperText={
            fieldState.error ? getErrorMessage(fieldState.error) : helperText
          }
          fullWidth
          onChange={(e) => {
            setInput(e.target.value)
          }}
          required={required}
          error={Boolean(fieldState.error)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {params.InputProps.endAdornment}
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : canCreate ? (
                  <Tooltip open={Boolean(input)} arrow title={locales.add}>
                    <StyledButton
                      hasInput={Boolean(input) ? 1 : 0}
                      onClick={() => {
                        if (input) {
                          field.onChange({
                            target: { value: [...value, input] },
                          })
                          setInput('')
                        }
                      }}
                    >
                      <PlusIcon />
                    </StyledButton>
                  </Tooltip>
                ) : null}
              </>
            ),
          }}
        />
      )}
    />
  )
}

export default MultiCombobox

export interface Props extends InputProps {
  getOptionLabel?: (option: any) => string
  options: any[]
  disabled?: boolean
  autoFocus?: boolean
  loading?: boolean
  canCreate?: boolean
}

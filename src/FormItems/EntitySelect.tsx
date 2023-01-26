import styled from '@emotion/styled'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { removeFromArray } from '../lib/misc'
import { useLocale } from '../lib/theme'
import { InputProps, Option } from '../lib/types'

const EntityField = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled(FormControl)`
  margin: 20px !important;

  @media (max-width: 767px) {
    width: 100% !important;
  }
`

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledLabel = styled(FormLabel)`
  && {
    color: ${({ theme }) => theme?.['palette']?.text.primary};
    font-size: 24px;
    font-weight: bolder;
  }

  .Mui-disabled {
    color: ${({ theme }) => theme?.['palette']?.text.disabled};
  }

  .Mui-focused {
    color: #3c9f80;
  }
`

const EntitySelect: FC<Props> = ({
  label,
  helperText,
  options,
  name,
  disabled,
  subName,
  index,
}) => {
  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name
  const { locales } = useLocale()
  const { field } = useController({ name: formName })

  const handleSelect = (value: string) => {
    if (field.value.includes(value)) {
      field.onChange({
        target: { value: removeFromArray([value], field.value) },
      })
    } else {
      field.onChange({ target: { value: [...field.value, value] } })
    }
  }

  const handleSelectAll = () => {
    if (options.every((val) => field.value.includes(val.value))) {
      field.onChange({
        target: {
          value: removeFromArray(
            options.map((val) => val.value),
            field.value
          ),
        },
      })
    } else {
      const missingOptions = options
        .filter((val) => !field.value.includes(val.value))
        .map((val) => val.value)
      field.onChange({
        target: { value: [...field.value, ...missingOptions] },
      })
    }
  }

  return (
    <Wrapper disabled={disabled}>
      <LabelWrapper>
        <StyledLabel>{label}</StyledLabel>
        <FormControlLabel
          style={{ marginLeft: '10px' }}
          label={
            options.every((val) => field.value.includes(val.value))
              ? locales.unselectAll
              : locales.selectAll
          }
          control={
            <Checkbox
              onChange={handleSelectAll}
              checked={options.every((val) => field.value.includes(val.value))}
            />
          }
        />
      </LabelWrapper>
      <FormGroup>
        {options.map((innerValue) => (
          <EntityField
            style={innerValue.helperText ? { margin: '10px 0' } : {}}
            key={innerValue.label}
          >
            <FormControlLabel
              label={
                <>
                  {innerValue.label}
                  {innerValue.helperText && (
                    <FormHelperText>{innerValue.helperText}</FormHelperText>
                  )}
                </>
              }
              control={
                <Checkbox
                  onChange={() => handleSelect(innerValue.value)}
                  checked={field.value.includes(innerValue.value)}
                />
              }
            />
          </EntityField>
        ))}
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </Wrapper>
  )
}

export default EntitySelect

export interface Props extends InputProps {
  options: Option[]
  disabled?: boolean
}

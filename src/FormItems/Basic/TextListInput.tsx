import styled from '@emotion/styled'
import { generateSlug } from '@inventhora/utils'
import PlusIcon from '@mui/icons-material/AddCircle'
import {
  Chip,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  InputProps,
  OutlinedInput,
  Tooltip,
} from '@mui/material'
import { useField } from 'formik'
import useTranslation from 'next-translate/useTranslation'
import React, { FC, ReactNode, useState } from 'react'

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
  required,
  error,
  maxItems = 999,
  ...rest
}) => {
  const { t } = useTranslation()
  const [input, setInput] = useState('')

  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name

  const [, meta, helper] = useField(formName)

  const value = meta.value ?? []

  return (
    <>
      <FormControl
        margin="dense"
        size="small"
        error={Boolean(meta.error) || error}
        required={required}
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
                title={t('forms:add')}
              >
                <StyledButton
                  hasInput={Boolean(input) ? 1 : 0}
                  onClick={() => {
                    if (input && value.length < maxItems) {
                      helper.setValue([...value, input])
                      setInput('')
                    }
                  }}
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
              helper.setValue([...value, input])
              setInput('')
            }
          }}
        />
        <div>
          {value.map((val, ind) => (
            <Chip
              color="primary"
              style={{ margin: '5px' }}
              onDelete={() => {
                const newArray = Array.from(value)
                newArray.splice(value.indexOf(val), 1)
                helper.setValue(newArray)
              }}
              key={ind}
              label={val}
            />
          ))}
        </div>
        <FormHelperText>{meta.error ?? helperText}</FormHelperText>
      </FormControl>
    </>
  )
}

export default TextListInput

export interface Props extends InputProps {
  name: string
  index?: number
  subName?: string
  label: ReactNode
  helperText?: ReactNode
  required?: boolean
  maxItems?: number
}

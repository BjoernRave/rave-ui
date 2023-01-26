import styled from '@emotion/styled'
import { InputAdornment } from '@mui/material'
import TextField from '@mui/material/TextField'
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { generateSlug } from '../lib/misc'
import { useLocale } from '../lib/theme'
import { InputProps } from '../lib/types'

const PhoneWrapper = styled.div`
  display: inline-flex !important;
  width: 100% !important;
  flex-direction: row !important;
`

const PhoneInput: FC<Props> = ({
  name,
  helperText,
  label,
  required,
  index,
  subName,
  prefixName,
  prefixSubName,
}) => {
  const { locales } = useLocale()
  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name

  const prefixFormName =
    typeof index === 'number' && prefixSubName
      ? `${prefixName}[${index}].${prefixSubName}`
      : prefixName

  const { field, fieldState } = useController({ name: formName })

  const prefixField = useController({ name: prefixFormName })

  return (
    <PhoneWrapper id={`${generateSlug(formName)}-group`}>
      <TextField
        style={{ width: '170px', alignSelf: 'flex-end', marginRight: '20px' }}
        required={required}
        value={prefixField.field.value}
        onChange={(e) => prefixField.field.onChange(e)}
        fullWidth
        id={generateSlug(prefixFormName)}
        label={locales.prefix}
        InputProps={{
          startAdornment: <InputAdornment position="start">+</InputAdornment>,
        }}
        error={Boolean(fieldState.error)}
        inputMode="numeric"
        type="text"
        margin="dense"
        size="small"
        onKeyDown={(e) => {
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

          e.preventDefault()
        }}
      />
      <TextField
        id={generateSlug(formName)}
        inputMode="numeric"
        type="text"
        margin="dense"
        size="small"
        onKeyDown={(e) => {
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

          e.preventDefault()
        }}
        label={label}
        value={field.value}
        onChange={(e) => {
          field.onChange(e)
        }}
        helperText={fieldState.error ? fieldState.error.message : helperText}
        error={Boolean(fieldState.error)}
        style={{ width: '100%' }}
        required={required}
      />
    </PhoneWrapper>
  )
}

export default PhoneInput

export interface Props extends InputProps {
  prefixName: string
  prefixSubName?: string
}

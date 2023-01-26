import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import deLocale from 'date-fns/locale/de'
import enLocale from 'date-fns/locale/en-US'
import esLocale from 'date-fns/locale/es'
import ptLocale from 'date-fns/locale/pt'
import { FC } from 'react'
import { Language } from '../../lib/types'

const localeMap = {
  en: enLocale,
  es: esLocale,
  pt: ptLocale,
  de: deLocale,
}

const DateTimeProvider: FC<Props> = ({ children, lang }) => {
  return (
    <LocalizationProvider locale={localeMap[lang]} dateAdapter={AdapterDateFns}>
      {children}
    </LocalizationProvider>
  )
}

export default DateTimeProvider

export interface Props {
  lang: Language
}

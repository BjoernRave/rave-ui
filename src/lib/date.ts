import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
  isDate,
  parse,
} from 'date-fns'
import { DateFormat } from './types'

export const dateTimeFormat = 'dd.MM.yyyy HH:mm'

export const timeFormat = 'HH:mm'

export const dateFormat = 'dd.MM.yyyy'

export const getDateTimeFormat = (dateString: DateFormat) => {
  switch (dateString) {
    case 'daytime':
      return dateTimeFormat

    case 'day':
      return dateFormat

    case 'time':
      return timeFormat
  }
}

export const formatDate = (
  date: string | number | Date,
  dateString: DateFormat,
  timezone?: string
) => {
  if (!date || date === 'N/A') return date

  const actualDate = isDate(date) ? (date as Date) : new Date(date)

  return format(actualDate, getDateTimeFormat(dateString))
}

export const parseDate = (date: string, dateString: DateFormat) => {
  return parse(date, getDateTimeFormat(dateString), new Date())
}

export const formatDateRelative = ({
  date,
  dateLeft,
  withDays = false,
}: {
  date: Date
  dateLeft?: Date
  withDays?: boolean
}) => {
  if (!date || dateLeft === null) return '-'

  const secondDate = dateLeft ?? new Date()

  const secondsDiff = differenceInSeconds(secondDate, date)

  if (secondsDiff <= 60) {
    return `${secondsDiff}s`
  }

  const minuteDiff = differenceInMinutes(secondDate, date)

  if (minuteDiff <= 60) {
    return `${minuteDiff}m`
  }

  const hourDiff = differenceInHours(secondDate, date)

  if (hourDiff <= 24 || !withDays) {
    return `${hourDiff}h`
  }

  const dayDiff = differenceInDays(secondDate, date)

  return `${dayDiff}d`
}

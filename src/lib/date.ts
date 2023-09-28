import { differenceInSeconds, format, isDate, parse } from 'date-fns'
import { DateFormat } from './types'

export const dateTimeFormat = 'dd.MM.yyyy HH:mm'

export const timeFormat = 'HH:mm'

export const dateFormat = 'dd.MM.yyyy'

export const apiDateFormat = 'yyyy-MM-dd'

export const apiTime = 'HH:mm:ss'

export const getDateTimeFormat = (dateString: DateFormat) => {
  switch (dateString) {
    case 'daytime':
      return dateTimeFormat

    case 'day':
      return dateFormat

    case 'time':
      return timeFormat

    case 'apiDate':
      return apiDateFormat

    case 'apiTime':
      return apiTime
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

export const formatSecondsDuration = ({
  seconds,
  capAtHour,
  withSeconds,
  withDays,
}: {
  seconds: number
  withSeconds?: boolean
  capAtHour?: boolean
  withDays?: boolean
}) => {
  if (seconds <= 60) {
    return `${seconds}s`
  }

  const minuteDiff = Math.floor(seconds / 60)

  if (minuteDiff <= 60) {
    return `${minuteDiff}m ${
      withSeconds && seconds % 60 !== 0 ? `${seconds % 60}s` : ''
    }`
  }

  if (capAtHour) return `> 1h`

  const hourDiff = Math.floor(minuteDiff / 60)

  if (hourDiff <= 24 || !withDays) {
    return `${hourDiff}h ${
      minuteDiff % 60 !== 0 ? `${minuteDiff % 60}m` : ''
    } ${withSeconds && seconds % 60 !== 0 ? `${seconds % 60}s` : ''}`
  }

  const dayDiff = Math.floor(hourDiff / 24)

  return `${dayDiff}d ${hourDiff % 24 !== 0 ? `${hourDiff % 24}h` : ''}`
}

export const formatDateRelative = ({
  date,
  dateLeft,
  withDays = false,
  withSeconds,
  capAtHour,
}: {
  date: Date
  dateLeft?: Date
  withDays?: boolean
  withSeconds?: boolean
  capAtHour?: boolean
}) => {
  if (!date || dateLeft === null) return '-'

  const secondDate = dateLeft ?? new Date()

  const secondsDiff = differenceInSeconds(secondDate, date)

  return formatSecondsDuration({
    seconds: secondsDiff,
    withDays,
    withSeconds,
    capAtHour,
  })
}

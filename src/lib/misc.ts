import createCache from '@emotion/cache'
import { useEffect, useState } from 'react'

export const isServer = typeof window === 'undefined'

export const isDev = process.env.NODE_ENV === 'development'

export const uniquifyArray = <T>(a: T[] | undefined) => {
  if (!a || !Array.isArray(a)) return [] as T[]

  return a.filter((value, index, self) => {
    return self.indexOf(value) === index
  })
}

export const uniquifyObjectArray = <T extends Record<string, any>>(
  a: T[] | undefined,
  id: keyof T
) => {
  // Check if the input array is null
  if (!a || !Array.isArray(a) || a === null) return [] as T[]

  // Check if the id field exists in the objects of the array
  if (!a.every((item) => item.hasOwnProperty(id))) return [] as T[]

  return a.filter(
    (value, index, self) =>
      self.findIndex((item) => item[id] === value[id]) === index
  )
}

export const capitalizeString = (string: string) => {
  // Check if the input string is not null or undefined
  if (string === null || string === undefined) {
    return string
  }

  // Check if the input string is actually a string type
  if (typeof string !== 'string') {
    throw new Error('Input must be a string')
  }

  // Capitalize the first letter of the string
  return string[0].toUpperCase() + string.slice(1, string.length)
}

export const isValidDate = (d: any) => {
  return d instanceof Date && !isNaN(d as any)
}

export const cleanObject = <T>(object: T): T => {
  const newObject = {} as T

  Object.keys(object).map((entry) => {
    if (
      object[entry] !== 'N/A' &&
      (typeof object[entry] === 'boolean' || Boolean(object[entry]))
    ) {
      newObject[entry] = object[entry]
    }
  })
  return newObject
}

export const removeFromArray = (items: string[], array: string[]) => {
  const newArray = Array.from(array)
  items.forEach((item) => {
    newArray.splice(
      newArray.findIndex((val) => val === item),
      1
    )
  })
  return newArray
}

export const generateRandomString = ({
  length,
  withSymbols = false,
  withNumbers = true,
}: {
  length: number
  withSymbols?: boolean
  withNumbers?: boolean
}) => {
  let result = ''
  const specials = '!@#$%^&*'
  const numbers = '0123456789'
  const smallChars = 'abcdefghijklmnopqrstuvwxyz'
  const bigChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i = 0; i < length / 4; i++) {
    if (withSymbols) {
      result += specials.charAt(Math.floor(Math.random() * specials.length))
    }
    if (withNumbers) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length))
    }
    result += smallChars.charAt(Math.floor(Math.random() * smallChars.length))
    result += bigChars.charAt(Math.floor(Math.random() * bigChars.length))
  }
  return result
}

export const roundTo = (
  number: number,
  decimals: number,
  asNumber?: boolean
) => {
  const x = Math.pow(10, Number(decimals) + 1)
  if (asNumber) return Number((Number(number) + 1 / x).toFixed(decimals))
  return (Number(number) + 1 / x).toFixed(decimals)
}

export const generateSlug = (text: string) =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')

export const parseNumber = (number: any) => {
  if (number === null || number === undefined || number === '') return null
  if (typeof number === 'number') return number
  return Number(number.replace(',', '.'))
}

export const removeFromObjectArray = (
  array: Record<string, unknown>[],
  key: string,
  value: any
): any[] => {
  const newArray = Array.from(array)

  newArray.splice(
    newArray.findIndex((item) => item[key] === value),
    1
  )

  return newArray
}

export const getObjectKeyByString = (o: Record<string, any>, s: string) => {
  s = s.replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
  s = s.replace(/^\./, '') // strip a leading dot
  const a = s.split('.')
  for (let i = 0, n = a.length; i < n; ++i) {
    const k = a[i]
    if (!o) return null
    if (k in o) {
      o = o[k]
    } else {
      return
    }
  }
  return o
}

export const combineFirstLastName = (entity: {
  firstName?: string
  lastName: string
}) => {
  if (!entity?.firstName) return null

  if (entity.lastName) return `${entity.firstName} ${entity.lastName}`

  return entity.firstName
}

export const flatten = (arr: any[]) => {
  if (!Array.isArray(arr)) return arr
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    )
  }, [])
}

export const enterFullscreen = () => {
  if (!isServer) {
    const elem: any = document.documentElement

    /* View in fullscreen */

    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen()
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen()
    }
  }
}

export const exitFullScreen = () => {
  if (!isServer) {
    const doc: any = document
    if (doc.exitFullscreen) {
      doc.exitFullscreen()
    } else if (doc.mozCancelFullScreen) {
      /* Firefox */
      doc.mozCancelFullScreen()
    } else if (doc.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      doc.webkitExitFullscreen()
    } else if (doc.msExitFullscreen) {
      /* IE/Edge */
      doc.msExitFullscreen()
    }
  }
}

export const getDescendantProp = (obj: Record<string, any>, desc: string) => {
  const arr = desc.split('.')
  while (arr.length && (obj = obj[arr.shift()]));
  return obj
}

const ordinalizeNumber = (n) => {
  const rule = new Intl.PluralRules('en-US', { type: 'ordinal' }).select(n)
  const suffix = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
  }[rule]
  return `${n}${suffix}`
}

const replaceAll = (string: string, search: string, replace: string) => {
  return string.split(search).join(replace)
}

export const getTimeSince = (_fromDate, _toDate, dateStringCap) => {
  const throwError = () => {
    throw new Error(
      'getTimeSince requires 1-2 arguments, of type date or date-string'
    )
  }
  if (
    typeof _fromDate === 'undefined' ||
    isNaN(Number(_fromDate)) ||
    (typeof _toDate !== 'undefined' && isNaN(Number(_toDate)))
  )
    throwError()
  const toPresent =
    _toDate === undefined || Math.abs(Number(_toDate) - Number(new Date())) < 50
  const fromDate = Number(new Date(_fromDate))
  const toDate = Number(
    _toDate === undefined ? new Date() : new Date(_toDate ?? null)
  )
  if (isNaN(fromDate) || isNaN(toDate)) throwError()
  let formatTimeSince = new Intl.RelativeTimeFormat('en', {
    localeMatcher: 'best fit',
    style: 'long',
    numeric: 'auto',
  })
  let diff = fromDate - toDate
  if (!isNaN(dateStringCap) && Math.abs(diff) >= Number(dateStringCap)) {
    const [weekday, month, dateNumStr, year] = replaceAll(
      new Date(fromDate).toLocaleString('en-us', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      ',',
      ''
    ).split(' ')
    return `${weekday} ${month} ${ordinalizeNumber(
      Number(dateNumStr)
    )}, ${year}`
  }
  if (Math.abs(diff) < 1000) return toPresent ? 'now' : 'simultaneously'
  for (const [unit, value] of [
    ['year', 1000 * 60 * 60 * 24 * 365],
    ['month', 1000 * 60 * 60 * 24 * 31],
    ['week', 1000 * 60 * 60 * 24 * 7],
    ['day', 1000 * 60 * 60 * 24],
    ['hour', 1000 * 60 * 60],
    ['minute', 1000 * 60],
    ['second', 1000],
  ] as const)
    if (Math.abs(diff) >= value) {
      const { sign, floor, ceil } = Math
      let result = formatTimeSince.format(
        (sign(diff) === 1 ? floor : ceil)(diff / (value as number)),
        unit as any
      )
      if (!toPresent)
        result =
          Math.sign(diff) === 1
            ? result.replace('in ', '') + ' later'
            : result.replace('ago', 'prior')
      return result
    }
}

export const useScrollPosition = () => {
  const [topDistance, setTopDistance] = useState(0)

  const setTopDistanceEvent = () => {
    setTopDistance(window.pageYOffset)
  }

  useEffect(() => {
    document.addEventListener('scroll', setTopDistanceEvent)
    return () => {
      document.removeEventListener('scroll', setTopDistanceEvent)
    }
  }, [])

  return topDistance
}

export const useIsMobile = (
  initialWidth = Infinity,
  initialHeight = Infinity
) => {
  const [state, setState] = useState<{ width: number; height: number }>({
    width: !isServer ? window.innerWidth : initialWidth,
    height: !isServer ? window.innerHeight : initialHeight,
  })

  useEffect((): (() => void) | void => {
    if (!isServer) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener('resize', handler)

      return () => {
        window.removeEventListener('resize', handler)
      }
    }
  }, [])

  return state.width < 767
}

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export const createEmotionCache = () => {
  let insertionPoint

  if (!isServer) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    )
    insertionPoint = emotionInsertionPoint ?? undefined
  }

  return createCache({ key: 'mui-style', insertionPoint })
}

export const createQueryParams = (params: any) =>
  Object.keys(params)
    .map((key) => `${key}=${encodeURI(params[key])}`)
    .join('&')

export const useAdjustedViewport = () => {
  useEffect(() => {
    const handleViewport = () => {
      // We execute the same script as before
      const vh = window.innerHeight
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    handleViewport()
    window.addEventListener('resize', handleViewport)

    return () => window.removeEventListener('resize', handleViewport)
  }, [])
}

export const downloadFile = (blob: Blob, fileName: string) => {
  const link = document.createElement('a')
  // create a blobURI pointing to our Blob
  link.target = '_blank'
  link.href = URL.createObjectURL(blob)
  link.download = fileName
  // some browser needs the anchor to be in the doc
  document.body.append(link)
  link.click()
  link.remove()
  // in case the Blob uses a lot of memory
  setTimeout(() => URL.revokeObjectURL(link.href), 7000)
}

export const getErrorMessage = (error: any): string => {
  if (typeof error === 'object') {
    return getErrorMessage(error[Object.keys(error)[0]])
  }

  return error
}

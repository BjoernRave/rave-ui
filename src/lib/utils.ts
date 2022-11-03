import { createTheme } from "@mui/material"
import { UseMutateAsyncFunction } from "@tanstack/react-query"
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
  isDate,
  parse,
} from "date-fns"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { DateFormat } from "./types"

const transformValue = (value: string | number) => {
  return typeof value === "number"
    ? value
    : !isNaN(Number(value))
    ? Number(value)
    : value === undefined
    ? null
    : value
}

export const useQueryParam = (key: string, initialState: string | number) => {
  const router = useRouter()
  const [state, setState] = useState(initialState)

  useEffect(() => {
    if (router.isReady && router.query[key]) {
      setState(transformValue(router.query[key] as any))
    }
  }, [router.isReady])

  useEffect(() => {
    if (!router.isReady) return

    if (transformValue(router.query[key] as any) !== state) {
      if (!state) {
        const newQuery = router.query

        delete newQuery[key]
        router.push({ pathname: router.pathname, query: newQuery })
      } else {
        router.push({
          pathname: router.pathname,
          query: { ...router.query, [key]: state },
        })
      }
    }
    if (router.query[key] && router.query[key] !== state) {
      setState(transformValue(router.query[key] as any))
    }
  }, [router, key, state])

  return [state, setState] as [typeof state, typeof setState]
}

export const handleMutation = async ({
  mutateAsync,
  variables,
  successMessage,
  onSuccess,
}: {
  mutateAsync: UseMutateAsyncFunction<any>
  variables: any
  successMessage: string
  onSuccess?: (response: any) => void
}) => {
  let response
  try {
    response = await mutateAsync(variables)

    toast.success(successMessage)
    onSuccess && onSuccess(response)
  } catch (error) {
    toast.error(error.message)
  }

  return response
}

export const isValidDate = (d: any) => {
  return d instanceof Date && !isNaN(d as any)
}

export const randomString = ({
  length,
  withSymbols = false,
  withNumbers = true,
}: {
  length: number
  withSymbols?: boolean
  withNumbers?: boolean
}) => {
  let result = ""
  const specials = "!@#$%^&*"
  const numbers = "0123456789"
  const smallChars = "abcdefghijklmnopqrstuvwxyz"
  const bigChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
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

export const dateTimeFormat = "dd.MM.yyyy HH:mm"

export const timeFormat = "HH:mm"

export const dateFormat = "dd.MM.yyyy"

export const apiDateFormat = "yyyy-MM-dd"

export const apiDateTimeFormat = "yyyy-MM-dd HH:mm:ss"

const getDateTimeFormat = (dateString: DateFormat) => {
  switch (dateString) {
    case "daytime":
      return dateTimeFormat

    case "day":
      return dateFormat

    case "time":
      return timeFormat

    case "apiDate":
      return apiDateFormat

    case "apiDateTime":
      return apiDateTimeFormat
  }
}

/**
 * Converts a Date into a human-readable format
 * @example
 * // returns 02.02.2021
 * formatDate(new Date("Tue Feb 02 2021"), 'day');
 * @example
 * // returns 18:35
 * formatDate("2021-02-02T18:35:39.100Z", 'time');
 */
export const formatDate = (
  date: string | number | Date,
  dateString: DateFormat
) => {
  if (!date || date === "N/A") return date as any

  const actualDate = isDate(date) ? (date as Date) : new Date(date)

  try {
    const dateAsString = format(actualDate, getDateTimeFormat(dateString))

    if (dateString === "apiDateTime") {
      return dateAsString.slice(0, -2) + "00"
    }

    return dateAsString as string
  } catch (error) {
    return "-"
  }
}

export const parseDate = (date: string, dateString: DateFormat) => {
  return parse(date, getDateTimeFormat(dateString), new Date())
}

export const cleanObject = <T>(object: T): T => {
  const newObject = {} as T

  Object.keys(object).map((entry) => {
    if (
      object[entry] !== "N/A" &&
      (typeof object[entry] === "boolean" || Boolean(object[entry]))
    ) {
      newObject[entry] = object[entry]
    }
  })
  return newObject
}

export const formatOptions: { value: string; label: string }[] = [
  { value: "xlsx", label: "Excel 2007+ XML Format" },
  { value: "xlsm", label: "Excel 2007+ Macro XML Format" },
  { value: "xlsb", label: "Excel 2007+ Binary Format" },
  { value: "biff8", label: "Excel 97-2004 Workbook Format" },
  { value: "biff5", label: "Excel 5.0/95 Workbook Format" },
  { value: "biff2", label: "Excel 2.0 Worksheet Format" },
  { value: "xlml", label: "Excel 2003-2004 (SpreadsheetML)" },
  { value: "ods", label: "OpenDocument Spreadsheet " },
  { value: "fods", label: "Flat OpenDocument Spreadsheet" },
  { value: "csv", label: "Comma Separated Values" },
  { value: "txt", label: "UTF-16 Unicode Text" },
  { value: "sylk", label: "Symbolic Link" },
  { value: "html", label: "HTML Document" },
  { value: "dif", label: "Data Interchange Format" },
  { value: "rtf", label: "Rich Text Format" },
  { value: "prn", label: "Lotus Formatted Text" },
  { value: "eth", label: "Ethercalc Record Format" },
]

export const aggregateData = ({
  data,
  aggregateBy,
  toAggregate,
}: {
  data: any[]
  aggregateBy?: string
  toAggregate: string[]
}) => {
  if (!data) return []

  const copiedData = data.map((a) => ({ ...a }))
  return copiedData.reduce((prev, next, ind) => {
    if (
      (!aggregateBy && ind !== 0) ||
      Boolean(prev.find((i) => i[aggregateBy] === next[aggregateBy]))
    ) {
      const newArray: any[] = [...prev]

      const index = !aggregateBy
        ? 0
        : prev.findIndex((i) => i[aggregateBy] === next[aggregateBy])

      for (const aggregateBy of toAggregate) {
        if (next[aggregateBy]) {
          if (newArray[index][aggregateBy]) {
            newArray[index][aggregateBy] =
              newArray[index][aggregateBy] + Number(next[aggregateBy])
          } else {
            newArray[index][aggregateBy] = Number(next[aggregateBy])
          }
        }
      }

      return newArray
    } else {
      return [...prev, next]
    }
  }, [])
}

export const chunkify = (a: any[], n: number, balanced: boolean) => {
  if (n < 2) return [a]

  const len = a.length
  const out = []
  let i = 0
  let size = 0

  if (len % n === 0) {
    size = Math.floor(len / n)
    while (i < len) {
      out.push(a.slice(i, (i += size)))
    }
  } else if (balanced) {
    while (i < len) {
      size = Math.ceil((len - i) / n--)
      out.push(a.slice(i, (i += size)))
    }
  } else {
    n--
    size = Math.floor(len / n)
    if (len % size === 0) size--
    while (i < size * n) {
      out.push(a.slice(i, (i += size)))
    }
    out.push(a.slice(size * n))
  }

  return out
}

const rgbToYIQ = ({ r, g, b }) => {
  return (r * 299 + g * 587 + b * 114) / 1000
}

const hexToRgb = (hex) => {
  if (!hex || hex === undefined || hex === "") {
    return undefined
  }

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : undefined
}

export const colorNameToHex = (color: string) => {
  const colors = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgrey: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32",
  }

  if (typeof colors[color.toLowerCase()] !== "undefined") {
    return colors[color.toLowerCase()]
  }

  return false
}

export const getTextColor = (color: string, threshold = 128) => {
  if (color === undefined) {
    return "#000"
  }

  const rgb = hexToRgb(color[0] === "#" ? color : colorNameToHex(color))

  if (rgb === undefined) {
    return "#000"
  }

  return rgbToYIQ(rgb) >= threshold ? "#000" : "#fff"
}

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#50C1C7",
    },
    secondary: {
      main: "#4ACEBF",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingBottom: "10px",
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
        },
      },
    },
    MuiTableFooter: {
      styleOverrides: {
        root: {
          position: "absolute",
          bottom: 0,
          right: 0,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "45px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          whiteSpace: "nowrap",
        },
        root: {
          padding: "5px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "5px",
          "&:hover": {
            color: "#0e7490",
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          alignSelf: "flex-end",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(0, 0, 0, 0.07)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        rounded: {
          borderRadius: "1rem",
        },
        elevation1: {
          boxShadow: "rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          fontWeight: 600,
          fontSize: "0.75rem",
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        transitionDuration: 0,
      },
    },
  },
})

export const sortParks = (data) => {
  if (!data) return []

  const parks = data.filter((d) => !d.ischild)

  return parks.map((park) => {
    const turbines = data.filter(
      (d) => d.ischild && d.ischild === park.id && /^\d+$/.test(d.parkname)
    )

    const rest = data.filter(
      (d) => d.ischild && d.ischild === park.id && !/^\d+$/.test(d.parkname)
    )

    const splittedName = park.parkname.split(" - ")

    const splittedPrefix = splittedName[0].split("-")

    return {
      dbId: park.id,
      attributes: park.attributes,
      id: splittedPrefix[1],
      group: splittedPrefix[0],
      name: splittedName[1],
      turbines: turbines,
      rest: rest,
    }
  })
}

export const hasPermission = (roles: any, permissions: (keyof any)[]) => {
  return true
}

export const isIOS =
  process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

export const formatDateRelative = ({
  date,
  dateLeft,
  withDays = false,
}: {
  date: Date
  dateLeft?: Date
  withDays?: boolean
}) => {
  if (!date || dateLeft === null) return "-"

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

export const useAdjustedViewport = () => {
  useEffect(() => {
    const handleViewport = () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }
    handleViewport()
    window.addEventListener("resize", handleViewport)

    return () => window.removeEventListener("resize", handleViewport)
  }, [])
}

import { CacheProvider, EmotionCache } from "@emotion/react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers-pro"
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns"
import deLocale from "date-fns/locale/de"
import { FC, PropsWithChildren } from "react"
import { createEmotionCache } from "./lib/misc"
import { defaultTheme } from "./lib/theme"

const clientSideEmotionCache = createEmotionCache()

const AppWrapper: FC<PropsWithChildren<Props>> = ({
  children,
  emotionCache,
  theme,
  withBaseTheme = true,
  locale = "en",
}) => {
  return (
    <CacheProvider value={emotionCache ? emotionCache : clientSideEmotionCache}>
      <ThemeProvider theme={defaultTheme(locale, withBaseTheme)}>
        {theme ? (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <LocalizationProvider
              adapterLocale={locale === "en" ? "en" : deLocale}
              dateAdapter={AdapterDateFns}
            >
              {children}
            </LocalizationProvider>
          </ThemeProvider>
        ) : (
          <>
            <CssBaseline />
            <LocalizationProvider
              adapterLocale={locale === "en" ? "en" : deLocale}
              dateAdapter={AdapterDateFns}
            >
              {children}
            </LocalizationProvider>
          </>
        )}
      </ThemeProvider>
    </CacheProvider>
  )
}

export default AppWrapper

interface Props {
  emotionCache?: EmotionCache
  theme?: any
  locale?: "en" | "de"
  withBaseTheme?: boolean
}

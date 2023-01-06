import { CacheProvider, EmotionCache } from "@emotion/react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers-pro"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import deLocale from "date-fns/locale/de"
import { FC } from "react"
import { createEmotionCache } from "./lib/utils"
import { LocaleContext } from "./LocaleContext"

const clientSideEmotionCache = createEmotionCache()

const AppWrapper: FC<Props> = ({
  children,
  emotionCache,
  theme,
  locale = "en",
}) => {
  return (
    <CacheProvider value={emotionCache ? emotionCache : clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider
          adapterLocale={locale === "en" ? "en" : deLocale}
          dateAdapter={AdapterDateFns}
        >
          <LocaleContext.Provider value={{ locale }}>
            {children}
          </LocaleContext.Provider>
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default AppWrapper

interface Props {
  emotionCache?: EmotionCache
  theme?: any
  locale?: "en" | "de"
  children: any
}

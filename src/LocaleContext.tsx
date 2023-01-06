import { createContext, useContext } from "react"
import deLocales from "./locales/de/common.json"
import enLocales from "./locales/en/common.json"

const locales = {
  de: deLocales,
  en: enLocales,
}

export const useLocale = () => {
  const ctx = useContext(LocaleContext)

  return { locales: locales[ctx.locale], lang: ctx.locale }
}

export const LocaleContext = createContext({
  locale: "",
})

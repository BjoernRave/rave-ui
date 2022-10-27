import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import deLocale from 'date-fns/locale/de';
import { createContext, FC, useContext } from 'react';
import { createEmotionCache } from './lib/utils';
import deLocales from './locales/de/common.json';
import enLocales from './locales/en/common.json';

const clientSideEmotionCache = createEmotionCache();

const locales = {
  de: deLocales,
  en: enLocales,
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);

  return { locales: locales[ctx.locale], lang: ctx.locale };
};

const LocaleContext = createContext({
  locale: '',
});

const AppWrapper: FC<Props> = ({
  children,
  emotionCache,
  theme,
  locale = 'en',
}) => {
  return (
    <CacheProvider value={emotionCache ? emotionCache : clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider
          locale={locale === 'en' ? 'en' : deLocale}
          dateAdapter={AdapterDateFns}
        >
          <LocaleContext.Provider value={{ locale }}>
            {children}
          </LocaleContext.Provider>
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppWrapper;

interface Props {
  emotionCache?: EmotionCache;
  theme?: any;
  locale?: 'en' | 'de';
}

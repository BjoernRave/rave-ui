import { createTheme, useTheme } from '@mui/material/styles'
import deLocales from '../locales/de/common.json'
import enLocales from '../locales/en/common.json'

declare module '@mui/material/styles' {
  interface Theme {
    locale: typeof enLocales
    lang: string
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    locale: typeof enLocales
    lang: string
  }
}

export const defaultTheme = (locale: string, withBaseTheme: boolean) =>
  createTheme({
    locale: locale === 'de' ? deLocales : enLocales,
    lang: locale,
    ...(withBaseTheme && {
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              border: '1px solid rgba(0, 0, 0, 0.07)',
              transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            },
            rounded: {
              borderRadius: '1rem',
            },
            elevation1: {
              boxShadow: 'rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem',
            },
          },
        },
        MuiContainer: {
          styleOverrides: {
            root: {
              paddingBottom: '10px',
            },
          },
        },
        MuiTableRow: {
          styleOverrides: {
            root: {
              height: '45px',
            },
          },
        },
        MuiTableFooter: {
          styleOverrides: {
            root: {
              position: 'absolute',
              bottom: 0,
              right: 0,
            },
          },
        },
        MuiToolbar: {
          styleOverrides: {
            root: {
              minHeight: '45px',
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            head: {
              whiteSpace: 'nowrap',
            },
            root: {
              padding: '5px',
              textAlign: 'center',
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              padding: '5px',
              '&:hover': {
                color: '#3c9f80',
              },
            },
          },
        },
        MuiDialogActions: {
          styleOverrides: {
            root: {
              alignSelf: 'flex-end',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '0.75rem',
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              borderRadius: '1rem',
            },
          },
        },
      },
    }),
  })

export const useLocale = () => {
  const theme = useTheme()
  return { locales: theme.locale, lang: theme.lang }
}

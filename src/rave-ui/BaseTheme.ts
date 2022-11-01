import { Theme } from '@mui/material'

export const getBaseTheme = (darkMode: boolean): Partial<Theme> => ({
  palette: {
    mode: darkMode ? 'dark' : 'light',
    primary: {
      main: '#3c9f80',
    } as any,
    secondary: {
      main: '#3f51b5',
    } as any,
  } as any,
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
})

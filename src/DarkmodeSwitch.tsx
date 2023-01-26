import Brightness4Icon from '@mui/icons-material/Brightness4'
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh'
import { IconButton, Tooltip } from '@mui/material'
import { FC } from 'react'
import { useLocale } from './lib/theme'

const DarkmodeSwitch: FC<Props> = ({ value, onChange }) => {
  const { locales } = useLocale()

  return (
    <Tooltip title={locales.toggleDarkMode}>
      <IconButton onClick={() => onChange(value)} size="large">
        {value ? <Brightness4Icon /> : <BrightnessHighIcon />}
      </IconButton>
    </Tooltip>
  )
}

export default DarkmodeSwitch

interface Props {
  value: boolean
  onChange: (value: boolean) => void
}

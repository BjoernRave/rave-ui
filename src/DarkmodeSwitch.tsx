import { IconButton, Tooltip } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh'
import useTranslation from 'next-translate/useTranslation'
import React, { FC } from 'react'

const DarkmodeSwitch: FC<Props> = ({ value, onChange }) => {
  const { t } = useTranslation()

  return (
    <Tooltip title={t('common:toggleDarkMode')}>
      <IconButton onClick={() => onChange(value)} size="large">
        {value ? <Brightness4Icon /> : <BrightnessHighIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default DarkmodeSwitch

interface Props {
  value: boolean
  onChange: (value: boolean) => void
}

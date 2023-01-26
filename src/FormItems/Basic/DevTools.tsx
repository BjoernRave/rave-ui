import { DevTool } from '@hookform/devtools'
import { FC } from 'react'

const RHFDevtools: FC<Props> = ({ control }) => {
  return <DevTool control={control} />
}

export default RHFDevtools

interface Props {
  control: any
}

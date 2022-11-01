import { Paper } from '@mui/material'
import { TableStat } from 'lib/types'
import { getTextColor } from 'lib/utils'
import { FC } from 'react'

const Stat: FC<Props> = ({
  className,
  stat: { name, value, color, percentage },
}) => {
  return (
    <Paper
      style={
        color ? { backgroundColor: color, color: getTextColor(color) } : {}
      }
      className={`flex-1  overflow-hidden bg-white rounded-lg shadow p-2 ${className}`}>
      <dt className='text-sm font-medium truncate'>{name}</dt>
      <div className='flex flex-col md:items-baseline md:flex-row'>
        <dd className='mt-1 text-3xl font-semibold '>{value}</dd>
        {percentage && !isNaN(percentage) ? (
          <span className='ml-2'>{percentage.toFixed(2)}%</span>
        ) : null}
      </div>
    </Paper>
  )
}

export default Stat

interface Props {
  className?: string
  stat: TableStat
}

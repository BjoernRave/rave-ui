import { useTheme } from '@mui/material'
import React, { FC } from 'react'
import {
  CartesianGrid,
  Line,
  LineChart as ReLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent'
import { ContentType } from 'recharts/types/component/Tooltip'

const LineChart: FC<Props> = ({ data, xKey, yKey, tooltip }) => {
  const theme = useTheme()

  return (
    <ResponsiveContainer height='100%' width='100%'>
      <ReLineChart
        data={data}
        margin={{
          top: 20,
          right: 10,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey={xKey} />
        <YAxis />
        {tooltip === 'default' ? (
          <Tooltip />
        ) : tooltip === 'hide' ? null : (
          <Tooltip content={tooltip} />
        )}
        <Line
          type='monotone'
          dataKey={yKey}
          fill={theme.palette.primary.main}
        />
      </ReLineChart>
    </ResponsiveContainer>
  )
}

export default LineChart

interface Props {
  data: any[]
  xKey: string
  yKey: string
  tooltip: 'hide' | 'default' | ContentType<ValueType, NameType>
}

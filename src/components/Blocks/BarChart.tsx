import React, { FC, Fragment } from 'react'
import {
  Bar,
  BarChart as ReBarChart,
  CartesianGrid,
  LabelList,
  Legend,
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

const Barchart: FC<Props> = ({ data, tooltip, bars, xKey }) => {
  return (
    <ResponsiveContainer height='100%' width='100%'>
      <ReBarChart
        data={data}
        margin={{
          top: 20,
          right: -20,
          left: -20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey={xKey} />

        {tooltip === 'default' ? (
          <Tooltip />
        ) : tooltip === 'hide' ? null : (
          <Tooltip content={tooltip} />
        )}
        <Legend />
        {!bars.some((b) => Boolean(b.axis)) && <YAxis />}
        {bars.map((bar, ind) => (
          <Fragment key={bar.yKey}>
            {bar.axis && (
              <YAxis
                tickFormatter={bar.axis.tickFormatter}
                domain={bar.axis.domain}
                orientation={bar.axis.orientation}
                stroke={bar.color}
                yAxisId={ind}
              />
            )}
            {bar.labelName ? (
              <Bar yAxisId={ind} dataKey={bar.yKey} fill={bar.color}>
                <LabelList dataKey={bar.labelName} position='top' />
              </Bar>
            ) : (
              <Bar yAxisId={ind} dataKey={bar.yKey} fill={bar.color} />
            )}
          </Fragment>
        ))}
      </ReBarChart>
    </ResponsiveContainer>
  )
}

export default Barchart

interface Props {
  data: any[]

  tooltip: 'hide' | 'default' | ContentType<ValueType, NameType>
  xKey: string
  bars: {
    yKey: string
    color: string
    labelName?: string
    axis?: {
      domain?: number[]
      tickFormatter?: (value: any, index: number) => string
      orientation: 'left' | 'right'
    }
  }[]
}

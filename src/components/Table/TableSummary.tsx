import { aggregateData } from 'lib/utils'
import React, { FC, useMemo } from 'react'
import { ColumnInstance } from 'react-table'

const Tablesummary: FC<Props> = ({ allColumns, data, toSum }) => {
  const aggregatedData = useMemo(
    () =>
      aggregateData({
        data,
        toAggregate:
          typeof toSum[0] === 'string' ? toSum : toSum.map((s) => s.id),
      }),
    [data, toSum]
  )

  if (!data || data.length === 0) return null

  return (
    <tfoot>
      <tr style={{ bottom: 0, position: 'sticky', backgroundColor: 'white' }}>
        {allColumns.map((col) => {
          const summing =
            typeof toSum[0] === 'string'
              ? (toSum as any).includes(col.id)
              : (toSum as any).find((s) => s.id === col.id)

          const summedValue = summing
            ? typeof toSum[0] === 'string'
              ? Math.round(aggregatedData[0][col.id])
              : `${Math.round(aggregatedData[0][col.id])}${
                  summing?.suffix ? summing.suffix : ''
                }`
            : null

          return (
            <th
              key={col.id}
              className='py-4 text-base'
              style={{ textAlign: 'left', padding: 5 }}>
              {isNaN(summedValue as any) ? null : summedValue}
            </th>
          )
        })}
      </tr>
    </tfoot>
  )
}

export default Tablesummary

interface Props {
  data: any[]
  allColumns: ColumnInstance<any>[]
  toSum: string[] | { suffix?: string; id: string }[]
}

import Stat from 'components/Blocks/Stat'
import { TableStat } from 'lib/types'
import { FC, useMemo } from 'react'
import { Row } from 'react-table'

const TableStats: FC<Props> = ({ getStats, flatRows }) => {
  const stats = useMemo(() => {
    if (!getStats) return []

    return getStats(flatRows.map((r) => r.original))
  }, [getStats, flatRows])

  return (
    <div className='flex w-full'>
      {stats.map((stat) => (
        <Stat key={stat.name} className='mx-2' stat={stat} />
      ))}
    </div>
  )
}

export default TableStats

interface Props {
  flatRows: Row<any>[]
  getStats?: (data: any[]) => TableStat[]
}

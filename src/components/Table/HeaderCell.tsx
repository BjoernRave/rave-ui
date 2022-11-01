import { TableCell, TableSortLabel } from '@mui/material'
import { FC } from 'react'
import { ColumnInstance } from 'react-table'

const HeaderCell: FC<Props> = ({ column, className }) => {
  return (
    <TableCell
      className={className}
      style={{ fontWeight: 'bolder' }}
      {...column.getHeaderProps()}>
      {column.canSort ? (
        <TableSortLabel
          hideSortIcon
          active={column.isSorted}
          direction={column.isSortedDesc ? 'desc' : 'asc'}
          {...column.getSortByToggleProps()}>
          {column.render('Header')}
        </TableSortLabel>
      ) : (
        column.render('Header')
      )}
    </TableCell>
  )
}

export default HeaderCell

interface Props {
  column: ColumnInstance<object>
  className?: string
}

import styled from '@emotion/styled'
import {
  Skeleton,
  TableBody as MuiTableBody,
  TableBodyProps,
  TableCell,
  TableRow,
} from '@mui/material'
import { FC, ReactNode } from 'react'
import { ColumnInstance, PropGetter, Row } from 'react-table'
import CollapsibleRow from './CollapsibleRow'

const StyledTableBody = styled(MuiTableBody)`
  @media (max-width: 1023px) {
    tr {
      :nth-of-type(even) {
        background-color: #d5d5d5;
      }
    }
  }
`

const NoRecords = styled.tr`
  font-size: 18px;
  display: table;
  position: absolute;
  margin: 20px auto;
  left: 0;
  right: 0;
  width: 100%;
`

const TableBody: FC<Props> = ({
  getTableBodyProps,
  prepareRow,
  rows,
  initialLoad,
  allColumns,
  renderExpandable,
  onRowClick,
  emptyScreen,
}) => {
  if (initialLoad) {
    const array = new Array(20).fill('blah')
    return (
      <StyledTableBody {...getTableBodyProps()}>
        {array.map((row, ind) => (
          <TableRow key={ind}>
            {allColumns.map((col, ind) => (
              <TableCell key={ind}>
                <Skeleton variant='text' />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </StyledTableBody>
    )
  }

  if (rows.length === 0) {
    return (
      <tbody style={{ position: 'relative', height: 60 }}>
        <NoRecords>
          {emptyScreen ? (
            emptyScreen
          ) : (
            <span className='absolute left-0 right-0 text-center'>
              Keine Daten verfügbar
            </span>
          )}
        </NoRecords>
      </tbody>
    )
  }

  return (
    <StyledTableBody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row)

        if (Boolean(renderExpandable)) {
          return (
            <CollapsibleRow
              onClick={() => onRowClick && onRowClick(row)}
              className={onRowClick && 'cursor-pointer hover:bg-gray-300'}
              key={row.id}
              renderExpandable={renderExpandable}
              row={row}
            />
          )
        }

        return (
          <TableRow
            onClick={() => onRowClick && onRowClick(row)}
            className={`${onRowClick && 'cursor-pointer hover:bg-gray-300'}`}
            key={row.id}
            {...row.getRowProps()}>
            {row.cells.map((cell, ind) => {
              return (
                <TableCell
                  className={cell.column.id === 'actions' ? 'no-print' : ''}
                  key={ind}
                  {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </TableCell>
              )
            })}
          </TableRow>
        )
      })}
    </StyledTableBody>
  )
}

export default TableBody

interface Props {
  getTableBodyProps: (
    propGetter?: PropGetter<
      object,
      TableBodyProps,
      never,
      Partial<TableBodyProps>
    >
  ) => TableBodyProps
  prepareRow: (row: Row<object>) => void
  rows: Row<object>[]
  initialLoad: boolean
  allColumns: ColumnInstance<any>[]
  renderExpandable?: (row: Row<object>) => ReactNode
  onRowClick: (row: Row<object>) => void
  emptyScreen?: ReactNode
}

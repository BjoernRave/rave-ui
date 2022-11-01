import { TableHead as MuiTableHead, TableRow } from '@mui/material'
import React, { FC } from 'react'
import { HeaderGroup } from 'react-table'
import HeaderCell from './HeaderCell'

const TableHead: FC<Props> = ({ headerGroups }) => {
  return (
    <MuiTableHead>
      {headerGroups.map((headerGroup) => (
        <TableRow key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <HeaderCell
              className={column.id === 'actions' ? 'no-print' : ''}
              key={column.id}
              column={column}
            />
          ))}
        </TableRow>
      ))}
    </MuiTableHead>
  )
}

export default TableHead

interface Props {
  headerGroups: HeaderGroup<object>[]
}

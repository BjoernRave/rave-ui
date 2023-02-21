import styled from '@emotion/styled'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  IconButton,
  InputAdornment,
  Skeleton,
  TableBody,
  TableContainer,
  TableSortLabel,
  TextField,
  Tooltip,
} from '@mui/material'
import MaUTable from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { visuallyHidden } from '@mui/utils'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { CSSProperties, FC, useMemo, useState } from 'react'
import { useLocale } from './lib/theme'
import { Action } from './lib/types'

const StyledTableBody = styled(TableBody)`
  @media (max-width: 1023px) {
    tr {
      :nth-of-type(even) {
        background-color: ${({ theme }) =>
          theme?.['palette']?.background.default};
      }
    }
  }
`

const StyledContainer = styled(TableContainer)`
  overflow: auto;
  width: 100%;
`

const Table: FC<Props> = ({
  columns,
  data,
  rowActions,
  onRowClick,
  hideSearch,
  maxHeight,
  style,
  labelledBy,
}) => {
  const { locales } = useLocale()
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState('')

  const populatedColumns: ColumnDef<any>[] = useMemo(() => {
    if (!rowActions) return columns

    return [
      ...columns,
      {
        id: 'actions',
        maxSize: 1,
        size: 1,
        enableSorting: false,
        enableGlobalFilter: false,
        cell: ({ row }) => (
          <div className="flex">
            {rowActions.map((action) => (
              <Tooltip title={action.label} key={action.label}>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation()
                    action.onClick(row)
                  }}
                >
                  {action.icon}
                </IconButton>
              </Tooltip>
            ))}
          </div>
        ),
      },
    ]
  }, [columns, rowActions])

  const table = useReactTable({
    data,
    columns: populatedColumns,
    state: {
      sorting,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  const array = useMemo(() => new Array(10).fill('blah'), [])

  const { rows } = table.getRowModel()

  return (
    <>
      {!hideSearch && (
        <TextField
          style={{ width: '100%', margin: '15px 0' }}
          label={locales.search}
          value={globalFilter}
          onChange={(e) => table.setGlobalFilter(e.target.value)}
          InputProps={{
            endAdornment: (
              <>
                {globalFilter && (
                  <InputAdornment position="end">
                    <Tooltip title={locales.clear}>
                      <IconButton
                        onClick={() => setGlobalFilter('')}
                        size="large"
                      >
                        <ClearIcon />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                )}
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              </>
            ),
          }}
        />
      )}
      <StyledContainer style={{ maxHeight, ...style }}>
        <MaUTable aria-labelledby={labelledBy} stickyHeader>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup, ind) => (
              <TableRow key={ind}>
                {headerGroup.headers.map((header) => {
                  const sortDir = header.column.getIsSorted()
                  const isSorted = Boolean(sortDir)

                  return (
                    <TableCell
                      style={{
                        fontWeight: 'bold',
                        width: header.getSize(),
                        ...(header.column.getCanSort() && {
                          cursor: 'pointer',
                          select: 'none',
                        }),
                      }}
                      key={header.id}
                      colSpan={header.colSpan}
                    >
                      {header.isPlaceholder ? null : header.column.getCanSort() ? (
                        <TableSortLabel
                          active={isSorted}
                          direction={isSorted ? (sortDir as any) : 'asc'}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {isSorted ? (
                            <Box component="span" sx={visuallyHidden}>
                              {sortDir === 'desc'
                                ? 'sorted descending'
                                : 'sorted ascending'}
                            </Box>
                          ) : null}
                        </TableSortLabel>
                      ) : (
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableHead>
          {!Boolean(data) ? (
            <StyledTableBody>
              {array.map((row, ind) => (
                <TableRow key={ind}>
                  {table
                    .getAllColumns()
                    .filter((c) => c.getIsVisible())
                    .map((col, ind) => (
                      <TableCell key={ind}>
                        <Skeleton variant="text" />
                      </TableCell>
                    ))}
                </TableRow>
              ))}
            </StyledTableBody>
          ) : rows.length > 0 ? (
            <StyledTableBody>
              {rows.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    className={` ${
                      onRowClick && 'cursor-pointer hover:bg-gray-300'
                    }`}
                    onClick={() => onRowClick && onRowClick(row)}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </StyledTableBody>
          ) : (
            <tbody>
              <TableRow>
                <TableCell
                  className="text-lg text-center "
                  colSpan={
                    table.getAllColumns().filter((c) => c.getIsVisible()).length
                  }
                >
                  {locales.noRecords}
                </TableCell>
              </TableRow>
            </tbody>
          )}
        </MaUTable>
      </StyledContainer>
    </>
  )
}

export default Table

export interface Props {
  columns: ColumnDef<any>[]
  data: any[]
  rowActions?: Action[]
  onRowClick?: (row: Row<any>) => void
  hideSearch?: boolean
  maxHeight?: number
  style?: CSSProperties
  labelledBy?: string
}

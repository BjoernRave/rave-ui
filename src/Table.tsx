import styled from "@emotion/styled"
import ClearIcon from "@mui/icons-material/Clear"
import SearchIcon from "@mui/icons-material/Search"
import {
  IconButton,
  InputAdornment,
  Skeleton,
  TableBody,
  TableContainer,
  TableSortLabel,
  TextField,
  Tooltip,
} from "@mui/material"
import MaUTable from "@mui/material/Table"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { CSSProperties, FC, useMemo } from "react"
import { Column, Row, useGlobalFilter, useSortBy, useTable } from "react-table"
import { useLocale } from "./LocaleContext"

const StyledRow = styled(TableRow)<{ hover: boolean }>`
  cursor: ${({ hover }) => hover && "pointer"};
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

const StyledTableBody = styled(TableBody)`
  @media (max-width: 1023px) {
    tr {
      :nth-of-type(even) {
        background-color: ${({ theme }) =>
          theme?.["palette"]?.background.default};
      }
    }
  }
`

const StyledCell = styled(TableCell)`
  font-weight: bold !important;
  background-color: ${({ theme }) =>
    theme?.["palette"]?.background.paper} !important;
`

const StyledContainer = styled(TableContainer)`
  overflow: auto;
  width: 100%;
`

const Table: FC<Props> = ({
  columns,
  data,
  actions,
  onRowClick,
  withSearch,
  selected,
  maxHeight,
  style,
  labelledBy,
}) => {
  const { locales } = useLocale()
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: data ?? [],
    },
    useGlobalFilter,
    useSortBy,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        ...columns,
        ...(actions ? actions : []),
      ])
    }
  )

  const array = useMemo(() => new Array(10).fill("blah"), [])

  return (
    <>
      {withSearch && (
        <TextField
          style={{ width: "100%", margin: "15px 0" }}
          label={locales.search}
          value={state.globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          InputProps={{
            endAdornment: (
              <>
                {state.globalFilter && (
                  <InputAdornment position="end">
                    <Tooltip title={locales.clear}>
                      <IconButton
                        onClick={() => setGlobalFilter("")}
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
        <MaUTable
          aria-labelledby={labelledBy}
          stickyHeader
          {...getTableProps()}
        >
          <TableHead>
            {headerGroups.map((headerGroup, ind) => (
              <TableRow key={ind} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <StyledCell key={column.id} {...column.getHeaderProps()}>
                    <TableSortLabel
                      hideSortIcon
                      active={column.isSorted}
                      direction={column.isSortedDesc ? "desc" : "asc"}
                      {...column.getSortByToggleProps()}
                    >
                      {column.render("Header")}
                    </TableSortLabel>
                  </StyledCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          {!Boolean(data) ? (
            <StyledTableBody {...getTableBodyProps()}>
              {array.map((row) => (
                <TableRow key={row.id}>
                  {columns.map((col, ind) => (
                    <TableCell key={ind}>
                      <Skeleton variant="text" />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </StyledTableBody>
          ) : rows.length > 0 ? (
            <StyledTableBody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row)

                return (
                  <StyledRow
                    selected={selected === row.id}
                    hover={Boolean(onRowClick)}
                    onClick={() => onRowClick && onRowClick(row)}
                    key={row.id}
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell, ind) => {
                      return (
                        <TableCell key={ind} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </TableCell>
                      )
                    })}
                  </StyledRow>
                )
              })}
            </StyledTableBody>
          ) : (
            <tbody style={{ position: "relative", height: 60 }}>
              <NoRecords>
                <span className="absolute left-0 right-0 text-center">
                  {locales.noRecords}
                </span>
              </NoRecords>
            </tbody>
          )}
        </MaUTable>
      </StyledContainer>
    </>
  )
}

export default Table

export interface Props {
  columns: Column<any>[]
  data: Record<string, any>[]
  actions?: any
  onRowClick?: (row: Row) => void
  selected?: string
  withSearch?: boolean
  maxHeight?: number
  style?: CSSProperties
  labelledBy?: string
}

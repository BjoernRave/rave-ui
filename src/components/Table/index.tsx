import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { IconButton, TableContainer, Tooltip } from "@mui/material"
import MaUTable from "@mui/material/Table"
import TableBody from "components/Table/TableBody"
import TableHead from "components/Table/TableHead"
import TableToolbar from "components/Table/TableToolbar"
import { TableStat } from "lib/types"
import { cleanObject, useAdjustedViewport } from "lib/utils"
import { useRouter } from "next/router"
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
} from "react"
import {
  CellProps,
  Column,
  ColumnInstance,
  Row,
  SortingRule,
  useColumnOrder,
  useExpanded,
  useFilters,
  useGlobalFilter,
  useSortBy,
  useTable,
} from "react-table"
import TableStats from "./TableStats"
import Tablesummary from "./TableSummary"

const initialsState = {
  allColumns: null,
  setAllFilters: null,
  setColumnOrder: null,
  selectedFlatRows: null,
  setHiddenColumns: null,
  sortBy: null,
  filters: null,
  columnOrder: null,
  hiddenColumns: null,
  title: null,
}

export const TableContext = createContext(initialsState)

const Table: FC<Props> = ({
  columns,
  data,
  filter,
  fetching,
  hideToolbar = false,
  title,
  additionalFilter,
  toolbarContent,
  rowActions,
  initialSortBy,
  renderExpandable,
  onResetFilter,
  additionalFilterCount,
  onRowClick,
  getStats,
  toSum,
  onCreate,
  onEdit,
  onDelete,
  emptyScreen,
}) => {
  const { query } = useRouter()
  const hooks = useCallback(
    (hooks) => {
      hooks.allColumns.push((columns) => [
        ...(renderExpandable
          ? [
              {
                id: "expander",
              },
            ]
          : []),
        ...columns,
        ...(rowActions || onEdit || onDelete
          ? [
              {
                id: "actions",
                Header: "Actions",
                Cell: (cell) => (
                  <div className="flex items-center">
                    {rowActions && rowActions(cell)}
                    {onEdit && (
                      <Tooltip title="Bearbeiten">
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation()
                            onEdit(cell.row)
                          }}
                          size="large"
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                    {onDelete && (
                      <Tooltip title="Löschen">
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation()
                            onDelete(cell.row)
                          }}
                          size="large"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </div>
                ),
              },
            ]
          : []),
      ])
    },
    [rowActions, renderExpandable, onEdit, onDelete]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setFilter,
    columns: tableColumns,
    flatRows,
    rows,
    filteredFlatRows,
    allColumns,
    setAllFilters,
    setColumnOrder,
    selectedFlatRows,
    setGlobalFilter,
    setHiddenColumns,
    state,
  } = useTable(
    {
      columns,
      autoResetFilters: false,
      data: data ? data : [],
      initialState: {
        ...(initialSortBy && { sortBy: [initialSortBy] }),
        ...(query.search && { globalFilter: query.search }),
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useColumnOrder,
    useExpanded,
    hooks
  )

  const {
    sortBy,

    filters,
    columnOrder,
    hiddenColumns,
    globalFilter,
  } = state

  useAdjustedViewport()

  useEffect(() => {
    const result = filter?.(tableColumns)
    if (result) {
      setFilter(result.columnId, result.updater)
    }
  }, [filter, tableColumns])

  const exportValues = useMemo(
    () => filteredFlatRows.map((d) => cleanObject(d.values)),
    [filteredFlatRows]
  )

  return (
    <div className="flex flex-col">
      <TableContext.Provider
        value={{
          allColumns,
          setAllFilters,
          setColumnOrder,
          selectedFlatRows,
          setHiddenColumns,
          sortBy,
          filters,
          columnOrder,
          hiddenColumns,
          title,
        }}
      >
        {getStats && <TableStats getStats={getStats} flatRows={flatRows} />}
        {!hideToolbar && (
          <TableToolbar
            onCreate={onCreate}
            onResetFilters={onResetFilter}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            toolbarContent={toolbarContent}
            additionalFilter={additionalFilter}
            additionalFilterCount={additionalFilterCount}
            filteredData={exportValues}
          />
        )}
        <TableContainer
          className="table-container"
          style={{
            overflow: "auto",
          }}
        >
          <MaUTable
            style={{
              width: "calc(100% - 20px)",
              margin: "0 10px",
              backgroundColor: "white",
            }}
            stickyHeader
            {...getTableProps()}
          >
            <TableHead headerGroups={headerGroups} />
            <TableBody
              emptyScreen={emptyScreen}
              onRowClick={onRowClick}
              renderExpandable={renderExpandable}
              initialLoad={fetching && data?.length === 0}
              getTableBodyProps={getTableBodyProps}
              prepareRow={prepareRow}
              rows={rows}
              allColumns={allColumns}
            />
            {toSum && (
              <Tablesummary
                allColumns={allColumns}
                data={filteredFlatRows
                  .filter((r) => r.depth === 0)
                  .map((r) => r.original)}
                toSum={toSum}
              />
            )}
          </MaUTable>
        </TableContainer>
      </TableContext.Provider>
    </div>
  )
}

export default Table

interface Props {
  data: any
  columns: Column<any>[]
  fetching: boolean
  title: string
  rowActions?: (cell: CellProps<any, any>) => ReactNode
  additionalFilter?: ReactNode
  toolbarContent?: ReactNode
  action?: { href: string; label: string }
  initialSortBy?: SortingRule<any>
  renderExpandable?: (row: Row<object>) => ReactNode
  onResetFilter?: () => void
  toSum?: string[] | { suffix?: string; id: string }[]
  additionalFilterCount?: number
  onRowClick?: (row: Row<any>) => void
  hideToolbar?: boolean
  filter?: (columns: ColumnInstance<any>[]) => {
    columnId: string
    updater: any
  }
  getStats?: (data: any[]) => TableStat[]
  emptyScreen?: ReactNode
  onCreate?: () => void
  onEdit?: (row: Row<any>) => void
  onDelete?: (row: Row<any>) => void
}

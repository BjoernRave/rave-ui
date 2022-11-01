import styled from "@emotion/styled"
import AddIcon from "@mui/icons-material/Add"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ClearIcon from "@mui/icons-material/Clear"
import SearchIcon from "@mui/icons-material/Search"
import {
  Button,
  IconButton,
  InputAdornment,
  Popover,
  TextField,
  Toolbar,
  Tooltip,
} from "@mui/material"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { FC, ReactNode, useContext, useState } from "react"
import { TableContext } from "./index"
import TableFilter from "./TableFilter"
import TableOrderMenu from "./TableOrderMenu"

const TableExport = dynamic(() => import("./TableExport"))

const TableActions = styled.div`
  display: flex;
  align-items: center;
`

const TableToolbar: FC<Props> = ({
  additionalFilter,
  toolbarContent,
  globalFilter,
  setGlobalFilter,
  filteredData,
  onResetFilters,
  additionalFilterCount,
  onCreate,
}) => {
  const router = useRouter()
  const { allColumns, hiddenColumns } = useContext(TableContext)
  const [isExporting, setIsExporting] = useState(false)
  const [contentAnchorEl, setContentAnchorEl] = useState(null)
  const [orderMenuAnchorEl, setOrderMenuAnchorEl] =
    useState<null | HTMLElement>(null)

  return (
    <>
      <Toolbar
        style={{
          width: "100%",
          display: "flex",
          position: "relative",
          minHeight: 72,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10",
        }}
        className="no-print"
      >
        {toolbarContent && (
          <>
            <IconButton
              className="lg:!hidden"
              onClick={(e) => setContentAnchorEl(e.currentTarget)}
              size="large"
            >
              <ChevronRightIcon
                style={{
                  transform: Boolean(contentAnchorEl) ? "rotate(90deg)" : "",
                }}
              />
            </IconButton>
            <Popover
              open={Boolean(contentAnchorEl)}
              anchorEl={contentAnchorEl}
              onClose={() => setContentAnchorEl(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <div className="p-4">
                {onCreate && (
                  <Button
                    type="button"
                    onClick={onCreate}
                    color="primary"
                    variant="contained"
                    endIcon={<AddIcon />}
                  >
                    Erstellen
                  </Button>
                )}{" "}
                {toolbarContent}
              </div>
            </Popover>
          </>
        )}
        <div className="flex w-full items-center justify-between ">
          <div className="hidden lg:flex">
            {onCreate && (
              <Button
                type="button"
                onClick={onCreate}
                color="primary"
                variant="contained"
                endIcon={<AddIcon />}
              >
                Erstellen
              </Button>
            )}
            {toolbarContent}
          </div>
          <TextField
            margin="dense"
            size="small"
            style={{
              flex: 1,
              marginLeft: 10,
              marginRight: 10,
            }}
            className=" lg:max-w-xl"
            label="Suche"
            type="search"
            value={globalFilter ?? ""}
            onChange={(e) => {
              setGlobalFilter(e.target.value)
              router.replace({
                query: { ...router.query, search: e.target.value },
              })
            }}
            InputProps={{
              endAdornment: (
                <>
                  {globalFilter && (
                    <InputAdornment position="end">
                      <Tooltip title="Reset">
                        <IconButton
                          onClick={() => {
                            setGlobalFilter("")
                            router.replace({
                              query: { ...router.query, search: "" },
                            })
                          }}
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
        </div>
        <TableActions>
          {/* <Tooltip title={"Export Data"}>
            <IconButton onClick={() => setIsExporting(true)} size="large">
              <CloudDownloadIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Print Data"}>
            <IconButton onClick={handlePrint} size="large">
              <PrintIcon />
            </IconButton>
          </Tooltip> */}

          {(allColumns.some((column) => Boolean(column.Filter)) ||
            additionalFilter) && (
            <TableFilter
              additionalFilterCount={additionalFilterCount}
              onResetFilters={onResetFilters}
              additionalFilter={additionalFilter}
            />
          )}

          {/* <Tooltip title={"Manage Columns"}>
            <IconButton
              onClick={(event) => setOrderMenuAnchorEl(event.currentTarget)}
              size="large"
            >
              <Badge
                badgeContent={hiddenColumns.length}
                color="primary"
                showZero
              >
                <SettingsIcon />
              </Badge>
            </IconButton>
          </Tooltip> */}
          {orderMenuAnchorEl && (
            <TableOrderMenu
              menuAnchorEl={orderMenuAnchorEl}
              setMenuAnchorEl={setOrderMenuAnchorEl}
            />
          )}
        </TableActions>
      </Toolbar>
      {isExporting && (
        <TableExport
          filteredData={filteredData}
          onClose={() => setIsExporting(false)}
        />
      )}
    </>
  )
}

export default TableToolbar

interface Props {
  additionalFilter?: ReactNode
  toolbarContent?: ReactNode
  globalFilter: string
  setGlobalFilter: (input: string) => void
  filteredData: any[]
  onResetFilters: () => void
  additionalFilterCount?: number
  onCreate?: () => void
}

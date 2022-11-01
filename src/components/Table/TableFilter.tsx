import styled from "@emotion/styled"
import FilterListIcon from "@mui/icons-material/FilterList"
import { Badge, Button, IconButton, Popover, Tooltip } from "@mui/material"
import { FC, ReactNode, useContext, useState } from "react"
import { TableContext } from "."
import { isServer } from "../../rave-ui"

const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 50vw;
  padding: 5px 10px 0;
`

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 10px;

  @media (max-width: 767px) {
    padding: 5px 10px;
  }
`

const Header = styled.h2`
  margin: 0;
  padding-right: 5px;
`

const StyledPopover = styled(Popover)`
  width: 50vw;
`

const TableFilter: FC<Props> = ({
  additionalFilter,
  additionalFilterCount,
  onResetFilters,
}) => {
  const { allColumns, setAllFilters, filters } = useContext(TableContext)
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip title="Filter">
        <IconButton
          id="filters"
          aria-controls="menu-filter"
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
          size="large"
        >
          <Badge
            showZero
            badgeContent={
              additionalFilterCount
                ? filters?.length + additionalFilterCount
                : filters?.length
            }
            color="primary"
          >
            <FilterListIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <StyledPopover
        id="menu-filter"
        anchorReference="anchorPosition"
        anchorPosition={{
          top: 90,
          left: !isServer ? window.screen.width : 10000,
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <FilterHeader>
          <Header>Filter</Header>
          <Button
            color="primary"
            onClick={() => {
              setAllFilters([])
              onResetFilters && onResetFilters()
            }}
          >
            Reset
          </Button>
        </FilterHeader>
        <InputWrapper>
          {allColumns
            .sort((a, b) => b.sortedIndex - a.sortedIndex)
            .map(
              (column) =>
                (column.defaultCanFilter || column.Filter) &&
                column.render("Filter", { key: column.id })
            )}
          {additionalFilter}
        </InputWrapper>
      </StyledPopover>
    </>
  )
}

export default TableFilter

interface Props {
  additionalFilter?: ReactNode
  onResetFilters: () => void
  additionalFilterCount?: number
}

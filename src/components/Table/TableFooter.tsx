import { TablePagination } from "@mui/material"
import { ChangeEvent, FC } from "react"
import { Loader } from "../../rave-ui"

const TableFooter: FC<Props> = ({
  count,
  rowsPerPage,
  onChangeRowsPerPage,
  onChangePage,
  page,
  fetching,
}) => {
  return (
    <>
      {fetching && <Loader color="secondary" />}
      <TablePagination
        className="no-print"
        page={page}
        component="div"
        rowsPerPageOptions={[20, 50, 100]}
        count={count ?? 0}
        rowsPerPage={rowsPerPage}
        onPageChange={onChangePage}
        onRowsPerPageChange={onChangeRowsPerPage}
      />
    </>
  )
}

export default TableFooter

interface Props {
  count: number | undefined
  rowsPerPage: number
  page: number
  onChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePage: (event: unknown, newPage: number) => void
  fetching: boolean
}

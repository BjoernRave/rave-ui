import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { IconButton, TableCell, TableRow } from '@mui/material'
import Loader from 'components/Blocks/Loader'
import { FC, ReactNode, useState } from 'react'
import { Row } from 'react-table'
import { useAsync } from 'react-use'
const CollapsibleRow: FC<Props> = ({
  row,
  renderExpandable,
  className,
  onClick,
}) => {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState<ReactNode>(null)

  useAsync(async () => {
    if (open && !Boolean(content)) {
      const renderContent = await renderExpandable(row)
      setContent(renderContent)
    }
  }, [open])

  return (
    <>
      <TableRow
        key={row.id}
        {...row.getRowProps()}
        onClick={onClick}
        className={className}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={(e) => {
              e.stopPropagation()
              setOpen(!open)
            }}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {row.cells
          .filter((c) => c.column.id !== 'expander')
          .map((cell, ind) => {
            return (
              <TableCell key={ind} {...cell.getCellProps()}>
                {cell.render('Cell')}
              </TableCell>
            )
          })}
      </TableRow>
      {open && (
        <TableRow>
          <TableCell
            style={{ paddingBottom: 0, paddingTop: 0 }}
            colSpan={row.cells.length + 1}>
            {content ? (
              content
            ) : (
              <div className='flex justify-center w-full py-4'>
                <Loader />
              </div>
            )}
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

export default CollapsibleRow

interface Props {
  row: Row<object>
  renderExpandable: (row: Row<object>) => ReactNode
  onClick: () => void
  className: string
}

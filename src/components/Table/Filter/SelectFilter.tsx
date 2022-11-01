import styled from '@emotion/styled'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { FC, useMemo } from 'react'
import { ColumnInstance, Row } from 'react-table'

export const StyledFormControl = styled(FormControl)`
  width: 48%;
  margin: 10px 0 !important;

  @media (max-width: 767px) {
    width: 100%;
    margin: 10px 0 !important;
  }
`

const SelectFilter: FC<Props> = ({
  label,
  getOptions,
  column: { filterValue = '', Header, setFilter, preFilteredRows, id },
}) => {
  const options: any[] = useMemo(
    getOptions
      ? () => getOptions(preFilteredRows, id)
      : () => {
          const options = new Set()
          preFilteredRows.forEach((row) => {
            options.add(row.values[id])
          })
          return [...options.values()]
        },
    [id, preFilteredRows]
  )

  return (
    <StyledFormControl size='small' margin='dense' variant='outlined'>
      <InputLabel margin='dense' id={`${Header}-label`}>
        {label ?? Header}
      </InputLabel>
      <Select
        size='small'
        margin='dense'
        label={label ?? Header}
        variant='outlined'
        value={filterValue}
        onChange={(e) => setFilter(e.target.value || undefined)}
        labelId={`${Header}-label`}>
        {options &&
          options
            .sort((a, b) => (a > b) as any)
            .map((value, ind) => (
              <MenuItem key={ind} value={value}>
                {value}
              </MenuItem>
            ))}
      </Select>
    </StyledFormControl>
  )
}

interface Props {
  column: ColumnInstance<any>
  label?: string
  options?: string[]
  getOptions?: (preFilteredRows: Row<any>[], id: string) => string[]
}

export default SelectFilter

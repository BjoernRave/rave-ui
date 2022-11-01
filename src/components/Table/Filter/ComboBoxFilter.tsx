import styled from '@emotion/styled'
import { Autocomplete, Checkbox, TextField } from '@mui/material'
import React, { FC } from 'react'
import { ColumnInstance } from 'react-table'

const StyledAutoComplete = styled(Autocomplete)`
  width: 48%;
  margin: 10px 0;

  @media (max-width: 767px) {
    width: 100%;
    margin: 10px 0;
  }
`

const ComboBoxFilter: FC<Props> = ({
  column,
  label,
  getOptionSelected,
  ...props
}) => {
  const { setFilter, filterValue = [], Header, preFilteredRows, id } = column

  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach((row) => {
      if (row.values[id]) {
        options.add(row.values[id])
      }
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  return (
    <StyledAutoComplete
      multiple
      value={filterValue}
      options={options.sort((a, b) => (a > b) as any)}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox style={{ marginRight: 8 }} checked={selected} />
          {option}
        </li>
      )}
      onChange={(_, value: any) =>
        setFilter(value?.length > 0 ? value : undefined)
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant='outlined'
          margin='dense'
          size='small'
          label={label ?? Header}
          fullWidth
        />
      )}
    />
  )
}

interface Props {
  column: ColumnInstance<any>

  getOptionSelected?: (option: any, value: any) => boolean
  label?: string
}

export default ComboBoxFilter

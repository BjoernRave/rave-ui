import { Box, FormControl, FormLabel, TextField } from '@mui/material'
import { DateRangePicker } from '@mui/x-date-pickers-pro'
import { parseDate } from 'lib/utils'
import { FC } from 'react'
import { ColumnInstance } from 'react-table'

export const filterInBetween = (rows, id, filterValue) => {
  return rows.filter((row) => {
    const rowValue = parseDate(row.values[id], 'daytime')

    if (!filterValue[1]) return rowValue >= filterValue[0]

    if (!filterValue[0]) return rowValue <= filterValue[1]

    return rowValue >= filterValue[0] && rowValue <= filterValue[1]
  })
}

filterInBetween.autoRemove = (val) => !Array.isArray(val)

const DateRangeFilter: FC<Props> = ({
  column: { filterValue = [null, null], Header, setFilter },
  customLabel,
}) => {
  return (
    <FormControl
      style={{ padding: '5px 10px' }}
      fullWidth
      id={`${Header}-label`}>
      <FormLabel style={{ marginBottom: 5 }}>{customLabel ?? Header}</FormLabel>
      <DateRangePicker
        value={filterValue}
        label={'Range End'}
        onChange={(dateRange: any) => {
          if (dateRange[0]) {
            dateRange[0].setHours(0, 0, 0, 0)
          }

          if (dateRange[1]) {
            dateRange[1].setHours(23, 59, 59, 999)
          }

          setFilter(dateRange)
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField
              {...startProps}
              FormHelperTextProps={{
                style: { display: 'none' },
                ...startProps.FormHelperTextProps,
              }}
              style={{ width: '49%', ...startProps.style }}
              label={`Start`}
              variant='outlined'
              margin='dense'
              size='small'
            />
            <Box sx={{ mx: 2 }}> bis </Box>
            <TextField
              {...endProps}
              FormHelperTextProps={{
                style: { display: 'none' },
                ...endProps.FormHelperTextProps,
              }}
              style={{ width: '49%', ...endProps.style }}
              label={`Ende`}
              variant='outlined'
              margin='dense'
              size='small'
            />
          </>
        )}
      />
    </FormControl>
  )
}

interface Props {
  column: ColumnInstance<any>
  customLabel?: string
}

export default DateRangeFilter

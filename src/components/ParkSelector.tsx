import { Autocomplete, TextField } from "@mui/material"
import { FC } from "react"

const ParkSelector: FC<Props> = ({
  onChange,
  options,
  value,
  label,
  getOptionLabel,
  getOptionSelected,
}) => {
  return (
    <Autocomplete
      value={value || null}
      options={options || []}
      getOptionLabel={getOptionLabel ? getOptionLabel : (option) => option.name}
      isOptionEqualToValue={
        getOptionSelected
          ? getOptionSelected
          : (option1, option2) => option1.id === option2.id
      }
      onChange={(_e, value) => {
        onChange(value as any)
      }}
      style={{ margin: "0 10px", marginTop: 2 }}
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          margin="dense"
          size="small"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  )
}

export default ParkSelector

interface Props {
  onChange: (value: any) => void
  value: any
  options: any[]
  label: string
  getOptionLabel?: (option: any) => string
  getOptionSelected?: (option1: any, option2: any) => boolean
}

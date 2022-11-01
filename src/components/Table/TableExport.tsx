import {
  Autocomplete,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material"
import { formatDate, formatOptions } from "lib/utils"
import { exportData } from "lib/xlsx"
import { FC, useContext, useState } from "react"
import { TableContext } from "."

const TableExport: FC<Props> = ({ onClose, title, filteredData }) => {
  const { title: tableFile } = useContext(TableContext)
  const [fileName, setFileName] = useState(
    `${title ? title : tableFile} - Export am ${formatDate(
      new Date(),
      "daytime"
    )}`
  )
  const [sheetType, setSheetType] = useState<{ value: string; label: string }>(
    null
  )
  const [loading, setLoading] = useState(false)

  const handleExport = async (e) => {
    e.preventDefault()
    setLoading(true)

    exportData({
      data: filteredData,
      title: fileName,
      sheetType: sheetType.value,
    })

    onClose()
    setLoading(false)
  }

  return (
    <Dialog onClose={onClose} fullWidth={true} maxWidth="sm" open={true}>
      <DialogTitle>Daten exportieren</DialogTitle>
      <form onSubmit={handleExport}>
        <DialogContent>
          <TextField
            required
            margin="dense"
            size="small"
            variant="outlined"
            style={{ width: "100%" }}
            label="Dateiname"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
          <Autocomplete
            value={sheetType}
            options={formatOptions}
            getOptionLabel={(option: any) =>
              `${option.value.toUpperCase()} - ${option.label}`
            }
            onChange={(_, value) => setSheetType((value as any) || undefined)}
            renderInput={(params) => (
              <TextField
                {...params}
                margin="dense"
                size="small"
                variant="outlined"
                required
                label={"Dateiformat"}
                fullWidth
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button type="button" autoFocus onClick={onClose} color="primary">
            Abbrechen
          </Button>
          <Button variant="contained" color="primary">
            {loading ? <CircularProgress size={24} /> : "Exportieren"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default TableExport

interface Props {
  onClose: () => void
  filteredData: any[]
  title?: string
}

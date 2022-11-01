import XLSX from "xlsx"

export const exportData = ({
  data,
  title,
  sheetType,
}: {
  data: any[]
  title: string
  sheetType: string
}) => {
  const ws = XLSX.utils.json_to_sheet(data)

  const range = XLSX.utils.decode_range(ws["!ref"])

  for (let C = range.s.r; C <= range.e.c; ++C) {
    const address = XLSX.utils.encode_col(C) + "1" // <-- first row, column number C

    if (!ws[address]) continue
    ws[address].v = ws[address].v
  }

  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, "SheetJS")

  /* generate XLSX file and send to client */
  XLSX.writeFile(wb, title + "." + sheetType)
}

export const parseCSV = (file: File): Promise<any[]> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    const rABS = !!reader.readAsBinaryString
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e?.target?.result

      const header = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        sheetRows: 1,
      })

      const parsedHeaders = XLSX.utils.sheet_to_json(
        header.Sheets[header.SheetNames[0]],
        { header: 1 }
      )

      const completeFile = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        cellDates: true,
      })

      const data: any[] = XLSX.utils.sheet_to_json(
        completeFile.Sheets[completeFile.SheetNames[0]],
        {
          header: parsedHeaders[0] as any,
        }
      )

      data.shift()

      resolve(data)
    }
    if (rABS) reader.readAsBinaryString(file)
    else reader.readAsArrayBuffer(file)
  })

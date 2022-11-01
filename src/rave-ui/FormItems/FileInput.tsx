import styled from "@emotion/styled"
import { generateSlug } from "@inventhora/utils"
import { FormControl, FormLabel } from "@mui/material"
import { FC } from "react"
import DocumentViewer from "../DocumentViewer"
import ImageViewer from "../ImageViewer"
import { InputProps } from "../lib/types"
import { useField } from "./Basic/Form"
import FileUpload from "./FileUpload"

const UploadWrapper = styled(FormControl)`
  width: 100%;
  margin: 10px 0 !important;
`

const FileInput: FC<Props> = ({
  name,
  multiple,
  label,
  index,
  subName,
  onDelete,
  isImages,
  required,
  onReOrder,
  getImageUrl,
}) => {
  const formName =
    typeof index === "number" && subName ? `${name}[${index}].${subName}` : name

  const { field, fieldState } = useField(formName)

  const handleDelete = async (file: { name?: string; id?: string }) => {
    if (file?.name) {
      if (multiple) {
        const newFiles = Array.from(field.value)
        field.onChange({
          target: {
            value: newFiles.filter(
              (innerFile: any) => innerFile.name !== file.name
            ),
          },
        })
      } else {
        field.onChange({ target: { value: undefined } })
      }
    } else {
      await onDelete(file.id)

      if (multiple) {
        const newFiles = Array.from(field.value)

        field.onChange({
          target: {
            value: newFiles.filter(
              (innerFile: any) => innerFile.id !== file?.id
            ),
          },
        })
      } else {
        field.onChange({ target: { value: undefined } })
      }
    }
  }

  const handleOrderChange = async (files: any) => {
    field.onChange({ target: { value: files } })

    if (!files.every((file) => file.name)) {
      await onReOrder(files.map(({ order, id }) => ({ order, id })))
    }
  }

  return (
    <UploadWrapper required={required}>
      <FormLabel htmlFor={generateSlug(formName)}>{label}</FormLabel>
      {(multiple || !field.value) && (
        <FileUpload
          id={generateSlug(formName)}
          multiple={multiple}
          onUpload={(files) => {
            field.onChange({
              target: {
                value: multiple
                  ? [...Array.from(files), ...field.value]
                  : files[0],
              },
            })
          }}
        />
      )}
      {((multiple && field?.value?.length > 0) || field.value) && (
        <>
          {isImages ? (
            <ImageViewer
              getImageUrl={getImageUrl}
              onOrderChange={multiple && onReOrder && handleOrderChange}
              images={multiple ? field.value : [field.value]}
              onDelete={onDelete && handleDelete}
            />
          ) : (
            <DocumentViewer
              canDownload={false}
              onDelete={onDelete && handleDelete}
              documents={multiple ? field.value : [field.value]}
            />
          )}
        </>
      )}
    </UploadWrapper>
  )
}

export default FileInput

interface Props extends InputProps {
  multiple?: boolean
  isImages?: boolean
  onDelete?: (id: string) => any
  onReOrder?: (items: { order: number; id: string }[]) => any
  getImageUrl: (file: any) => string
}

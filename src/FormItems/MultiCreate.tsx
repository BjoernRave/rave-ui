import styled from '@emotion/styled'
import PlusIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  FormLabel,
} from '@mui/material'
import { FC, PropsWithChildren, useId, useMemo, useState } from 'react'
import { useController, useFormContext, useWatch } from 'react-hook-form'
import { ZodSchema } from 'zod'
import { generateSlug, getErrorMessage } from '../lib/misc'
import { useLocale } from '../lib/theme'
import Table from '../Table'

import SubmitButton from './Basic/SubmitButton'

const StyledDialogContent = styled(DialogContent)`
  > *:not(label) {
    margin: 8px 0;
  }

  > button {
    margin: 20px 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 767px) {
    min-width: 767px;
  }
`

const HelperText = styled.span`
  align-self: flex-start;
  color: ${({ theme }) => theme?.['palette']?.text.secondary};
`

const StyledButton = styled(Button)`
  @media (max-width: 767px) {
    width: 50%;
  }
`

const StyledSubmit = styled(SubmitButton)`
  @media (max-width: 767px) {
    width: 50%;
  }
`

const CreateButton = styled(Button)`
  align-self: flex-start;
  margin: 10px 0 !important;

  @media (max-width: 767px) {
    padding: 20px;
    width: 100% !important;
  }
`

const MultiCreate: FC<PropsWithChildren<Props>> = ({
  children,
  fields,
  name,
  formatFunction,
  title,
  schema,
  helperText,
  onOpen,
  validate,
  label,
  required,
  initialValues,
}) => {
  const { locales } = useLocale()
  const [isCreating, setIsCreating] = useState(false)
  const [isUpdating, setIsUpdating] = useState('')

  const { setError } = useFormContext()
  const { field, fieldState } = useController({ name })
  const id = useId()
  const value = useWatch({ name })

  const tableData = useMemo(() => {
    if (isCreating) {
      const data = Array.from(value)
      data.pop()
      return data
    } else {
      return value
    }
  }, [isCreating, value])

  const handleClose = () => {
    if (isCreating) {
      const newArray = Array.from(value)
      newArray.pop()
      field.onChange({ target: { value: newArray } })

      setIsCreating(false)
    } else {
      const validateRes = validate && validate(value[isUpdating])

      if (validateRes) {
        return setError(`${name}[${isUpdating}]`, validateRes)
      }

      const result: any = schema.safeParse(value[isUpdating])

      if (result.success) {
        setIsUpdating('')
      } else {
        console.log('multi errors', result.error.issues)
        for (const error of result.error.issues) {
          setError(`${name}[${isUpdating}].${error.path[0]}`, {
            message: error.message,
            type: 'custom',
          })
        }
      }
    }
  }

  const handleSubmit = () => {
    const index = isCreating ? value.length - 1 : isUpdating

    const validateRes = validate && validate(value[index])

    if (validateRes) {
      return setError(`${name}[${index}]`, validateRes)
    }

    const result: any = schema.safeParse(value[index])

    if (result.success) {
      if (isCreating) {
        setIsCreating(false)
      } else {
        setIsUpdating('')
      }
    } else {
      console.log(result.error.issues)
      for (const error of result.error.issues) {
        console.log(`${name}[${index}].${error.path[0]}`)
        setError(`${name}[${index}].${error.path[0]}`, {
          message: error.message,
          type: 'custom',
        })
      }
    }
  }

  return (
    <div style={{ width: '100%' }}>
      <FormControl
        required={required}
        style={{ alignSelf: 'flex-start', margin: '10px 0', width: '100%' }}
      >
        <FormLabel style={{ marginBottom: 10 }}>{label}</FormLabel>
        {tableData?.length > 0 && (
          <>
            <Table
              columns={fields.map((field) => ({
                accessorKey: field.name,
                header: field.label,
              }))}
              data={formatFunction ? formatFunction(tableData) : tableData}
              rowActions={[
                {
                  label: locales.edit,
                  onClick: (row) => {
                    const newArray = Array.from(tableData)

                    const item = newArray.splice(row.index, 1)

                    newArray.push(item[0])

                    field.onChange({ target: { value: newArray } })

                    setIsUpdating(row.index)
                  },
                  icon: <EditIcon />,
                },
                {
                  label: locales.delete,
                  onClick: (row) => {
                    const updatedData = Array.from(tableData)
                    updatedData.splice(row.index, 1)
                    field.onChange({
                      target: { value: updatedData },
                    })
                  },
                  icon: <DeleteIcon />,
                },
              ]}
            />
          </>
        )}
        <CreateButton
          variant="contained"
          color="secondary"
          type="button"
          size="large"
          style={
            fieldState.error
              ? {
                  backgroundColor: '#f44336',
                }
              : {}
          }
          onClick={() => {
            setIsCreating(true)
            if (onOpen) {
              onOpen(value.length)
            } else {
              field.onChange({
                target: {
                  value: [...value, initialValues ? { ...initialValues } : {}],
                },
              })
            }
          }}
        >
          <PlusIcon style={{ margin: '0 5px 0 -5px' }} />
          {title}
        </CreateButton>

        {(fieldState.error || helperText) && (
          <FormHelperText error={Boolean(fieldState.error)}>
            {fieldState.error ? getErrorMessage(fieldState.error) : helperText}
          </FormHelperText>
        )}
      </FormControl>
      <Dialog
        disableEnforceFocus
        open={isCreating || isUpdating !== ''}
        onClose={handleClose}
        id={generateSlug(title)}
        aria-labelledby={id}
        maxWidth="xl"
      >
        <DialogTitle style={{ paddingBottom: 0 }} id={id}>
          {title}
        </DialogTitle>
        <StyledDialogContent>
          {helperText && <HelperText>{helperText}</HelperText>}
          {children}
        </StyledDialogContent>
        <DialogActions>
          <StyledButton type="button" onClick={handleClose}>
            {locales.cancel}
          </StyledButton>
          <StyledSubmit onClick={handleSubmit}>{locales.submit}</StyledSubmit>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default MultiCreate

interface Field {
  name: string
  label: string
}

export interface Props {
  fields: Field[]
  title: string
  name: string
  formatFunction?: any
  helperText?: string
  schema: ZodSchema<any>
  onOpen?: (index: string) => void
  validate?: (values: any) => any
  label: string
  required?: boolean
  initialValues?: any
}

import styled from '@emotion/styled'
import CancelIcon from '@mui/icons-material/Cancel'
import {
  CircularProgress,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Paper,
  Tooltip,
} from '@mui/material'
import { ColumnDef } from '@tanstack/react-table'
import { FC, useEffect, useMemo } from 'react'
import { useController } from 'react-hook-form'
import Infos from '../Infos'
import Table from '../Table'
import {
  generateSlug,
  getErrorMessage,
  getObjectKeyByString,
  isServer,
  removeFromObjectArray,
} from '../lib/misc'
import { useLocale } from '../lib/theme'
import { InputProps } from '../lib/types'
import { useIsRequired } from './Basic/SchemaContext'

const SelectedWrapper = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
  padding: 5px;
`

const SelectedText = styled.span`
  margin: 0 10px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const MobileSelectedWrapper = styled(Paper)`
  margin: 10px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  button {
    align-self: flex-end;
    margin: 10px 10px 0 0;
  }
`

const Selection = ({ columns, onDelete, value }) => {
  const { locales } = useLocale()

  const isMobile =
    !isServer &&
    window.matchMedia &&
    window.matchMedia('(max-width: 767px)').matches

  if (isMobile) {
    return (
      <MobileSelectedWrapper>
        <Tooltip title={locales.delete}>
          <IconButton
            style={{ marginLeft: 20 }}
            onClick={() => onDelete(value)}
            size="large"
          >
            <CancelIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Infos
          infos={columns.map((column) => ({
            name: column.Header,
            value:
              typeof column.accessor === 'string'
                ? getObjectKeyByString(value, column.accessor)
                : column.accessor(value),
          }))}
        />
      </MobileSelectedWrapper>
    )
  }

  return (
    <SelectedWrapper>
      {columns.map((column) => (
        <SelectedText key={column.Header}>
          <span style={{ fontWeight: 'bold', marginBottom: 10 }}>
            {column.Header}
          </span>
          {typeof column.accessor === 'string'
            ? getObjectKeyByString(value, column.accessor)
            : column.accessor(value)}
        </SelectedText>
      ))}
      <Tooltip title={locales.delete}>
        <IconButton
          style={{ marginLeft: 20 }}
          onClick={() => onDelete(value)}
          size="large"
        >
          <CancelIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </SelectedWrapper>
  )
}

const TableInput: FC<Props> = ({
  name,
  subName,
  index,
  label,
  helperText,
  options,
  columns,
  multiple,
  filterWith,
  hideSearch,
}) => {
  const formName =
    typeof index === 'number' && subName ? `${name}[${index}].${subName}` : name
  const isRequired = useIsRequired(formName)

  const { field, fieldState } = useController({ name: formName })

  useEffect(() => {
    if (options?.length === 1) {
      field.onChange({ target: { value: options[1] } })
    }
  }, [options])

  const data = useMemo(() => {
    // if (!field.value) return []

    return multiple
      ? options?.filter((option) => {
          if (
            filterWith &&
            field.value.length > 0 &&
            getObjectKeyByString(option, filterWith) !==
              getObjectKeyByString(field.value[0], filterWith)
          ) {
            return false
          }

          return !Boolean(field.value.find((val) => val.id === option.id))
        })
      : options
  }, [multiple, options, field.value])

  return (
    <FormControl
      style={{ width: '100%', display: 'grid' }}
      error={Boolean(fieldState.error)}
      required={isRequired}
    >
      <FormLabel id={`${generateSlug(name)}-input`}>{label}</FormLabel>
      {!multiple && field.value && (
        <Selection
          onDelete={() => field.onChange({ target: { value: null } })}
          value={field.value}
          columns={columns}
        />
      )}
      {multiple &&
        field.value?.length > 0 &&
        field.value.map((value, ind) => (
          <Selection
            value={value}
            onDelete={(v) =>
              field.onChange({
                target: {
                  value: removeFromObjectArray(field.value, 'id', v.id),
                },
              })
            }
            key={ind}
            columns={columns}
          />
        ))}
      {!Boolean(options) ? (
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            margin: '10px 0',
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        (multiple || !field.value) && (
          <Table
            labelledBy={`${generateSlug(name)}-input`}
            hideSearch={hideSearch}
            style={{ margin: '10px 0' }}
            maxHeight={400}
            onRowClick={(row: any) =>
              field.onChange({
                target: {
                  value: multiple
                    ? [...field.value, row.original]
                    : row.original,
                },
              })
            }
            data={data}
            columns={columns}
          />
        )
      )}
      {helperText && (
        <FormHelperText>
          {fieldState.error ? getErrorMessage(fieldState.error) : helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default TableInput

interface Props extends InputProps {
  columns: ColumnDef<any>[]
  options: any[]
  multiple?: boolean
  filterWith?: string
  hideSearch?: boolean
}

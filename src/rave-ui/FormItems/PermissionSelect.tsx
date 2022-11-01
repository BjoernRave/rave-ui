import styled from "@emotion/styled"
import { removeFromArray } from "@inventhora/utils"
import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material"
import { FC } from "react"
import { useLocale } from "../AppWrapper"
import { useField } from "./Basic/Form"

const PermissionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledDivider = styled(Divider)`
  align-self: normal;
`

const StyledLabel = styled(FormLabel)`
  && {
    color: ${({ theme }) => theme?.["palette"]?.text.primary};
    font-size: 24px;
    font-weight: bolder;
  }

  .Mui-disabled {
    color: ${({ theme }) => theme?.["palette"]?.text.disabled};
  }

  .Mui-focused {
    color: #3c9f80;
  }
`

const PermissionSelect: FC<Props> = ({ permissions, name }) => {
  const { locales } = useLocale()
  const { field, fieldState } = useField(name)

  const sortedPermissions = permissions
    ? permissions?.reduce((prev, next) => {
        const splitted = next.name.split(":")

        return {
          ...prev,
          [splitted[1]]: prev[splitted[1]]
            ? [...prev[splitted[1]], splitted[0]]
            : [splitted[0]],
        }
      }, {})
    : {}

  const handleSelect = (permission: string) => {
    if (!field.value.includes(permission)) {
      const splitted = permission.split(":")
      if (
        splitted[0] !== "READ" &&
        !field.value.includes(`READ:${splitted[1]}`)
      ) {
        field.onChange({
          target: {
            value: [...field.value, `READ:${splitted[1]}`, permission],
          },
        })
      } else {
        field.onChange({ target: { value: [...field.value, permission] } })
      }
    } else {
      field.onChange({
        target: { value: removeFromArray([permission], field.value) },
      })
    }
  }

  const handleSelectAll = (values: any[], group: string) => {
    if (values.every((val) => field.value.includes(`${val}:${group}`))) {
      field.onChange({
        target: {
          value: removeFromArray(
            values.map((val) => `${val}:${group}`),
            field.value
          ),
        },
      })
    } else {
      const missingValues = values
        .filter((val) => !field.value.includes(`${val}:${group}`))
        .map((val) => `${val}:${group}`)
      field.onChange({ target: { value: [...field.value, ...missingValues] } })
    }
  }

  return (
    <PermissionsWrapper>
      {Object.keys(sortedPermissions).map((pName) => (
        <div key={pName} style={{ width: "100%" }}>
          <FormControl style={{ margin: "20px 40px" }}>
            <LabelWrapper>
              <StyledLabel> {pName}</StyledLabel>
              <FormControlLabel
                style={{ marginLeft: "10px" }}
                label={
                  sortedPermissions[pName].every((val) =>
                    field.value.includes(val.value)
                  )
                    ? locales.unselectAll
                    : locales.selectAll
                }
                control={
                  <Checkbox
                    onChange={() =>
                      handleSelectAll(sortedPermissions[pName], pName)
                    }
                    checked={sortedPermissions[pName].every((val) =>
                      field.value.includes(`${val}:${pName}`)
                    )}
                  />
                }
              />
            </LabelWrapper>
            <FormGroup>
              {sortedPermissions[pName].map((permission) => (
                <FormControlLabel
                  key={`${permission}:${pName}`}
                  label={permission}
                  control={
                    <Checkbox
                      onChange={() => handleSelect(`${permission}:${pName}`)}
                      checked={field.value.includes(`${permission}:${pName}`)}
                    />
                  }
                />
              ))}
            </FormGroup>
          </FormControl>
          <StyledDivider />
        </div>
      ))}
    </PermissionsWrapper>
  )
}

export default PermissionSelect

export interface Props {
  permissions: any[]
  name: string
}

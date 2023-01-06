import styled from "@emotion/styled"
import { Table, TableBody, TableCell, TableRow } from "@mui/material"
import { FC, ReactNode, useMemo } from "react"

const KeyWrapper = styled.span`
  font-size: 18px;
  svg {
    margin-right: 5px;
  }
`

const Infos: FC<Props> = ({ infos, hideEmpty = true, className }) => {
  const filteredInfos = useMemo(
    () =>
      hideEmpty
        ? infos.filter(
            (info) =>
              info.value !== "" &&
              info.value !== null &&
              info.value !== undefined
          )
        : infos,
    [infos]
  )

  return (
    <Table className={className} style={{ width: "initial" }}>
      <TableBody>
        {filteredInfos.map(({ Icon, name, value }) => (
          <TableRow key={name}>
            {Icon && (
              <TableCell style={{ border: "none" }}>
                {" "}
                <Icon />
              </TableCell>
            )}
            <TableCell
              align="left"
              style={{
                border: "none",
                paddingRight: "10px",
              }}
            >
              <KeyWrapper>{name}:</KeyWrapper>
            </TableCell>
            <TableCell
              align="left"
              style={{
                fontSize: 18,

                border: "none",
                fontWeight: "bold",
              }}
            >
              {typeof value === "string" && value.indexOf("http") === 0 ? (
                <a
                  rel="noreferrer"
                  className="text-blue-500 underline"
                  target="_blank"
                  href={value}
                >
                  {value}
                </a>
              ) : (
                value
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default Infos

interface Props {
  infos: Info[]
  hideEmpty?: boolean
  className?: string
}

export interface Info {
  name: string
  Icon?: any
  value: ReactNode | string
}

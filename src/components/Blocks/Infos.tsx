import styled from "@emotion/styled"
import ClearIcon from "@mui/icons-material/Clear"
import SearchIcon from "@mui/icons-material/Search"
import {
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material"
import { Attribute, AttributeCategory, AttributeValue } from "@prisma/client"
import { FC, ReactNode, useMemo, useState } from "react"

const KeyWrapper = styled.span<{ fontSize: number }>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  svg {
    margin-right: 5px;
  }
`

const InfosBlock: FC<InfosBlockProps> = ({
  infos,
  fontSize,
  style,
  hideKeys,
  filterKeys,
}) => {
  const filteredInfos = useMemo(
    () =>
      filterKeys
        ? infos.filter(
            (info) =>
              info.value !== "" &&
              info.value !== null &&
              info.value !== undefined
          )
        : infos,
    [filterKeys, infos]
  )

  return (
    <Table style={{ width: "initial", flex: 1, ...style }}>
      <TableBody>
        {filteredInfos.map(({ label, value }) => (
          <TableRow style={{ height: "initial" }} key={label}>
            {!hideKeys && (
              <TableCell
                style={{
                  textAlign: "left",
                  border: "none",
                  paddingRight: "10px",
                }}
              >
                <KeyWrapper style={{ color: "black" }} fontSize={fontSize}>
                  {label}:
                </KeyWrapper>
              </TableCell>
            )}
            <TableCell
              style={{
                fontSize,
                textAlign: "left",
                border: "none",
                fontWeight: "bold",
                color: "black",
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

const Infos: FC<Props> = ({
  infos,
  fontSize = 18,
  style,
  className,
  hideKeys,
  filterKeys,
}) => {
  const [searchValue, setSearchValue] = useState("")

  const sortedAttributes = useMemo(() => {
    const filteredInfos = searchValue
      ? infos.filter(
          (info) =>
            info.value.toLowerCase().indexOf(searchValue.toLowerCase()) !==
              -1 ||
            info.attribute.name
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) !== -1
        )
      : infos

    const sortedInfos = filteredInfos.reduce((prev, next) => {
      const existingCategory = prev.find(
        (item) => item.category === next.attribute.attributeCategory.name
      )

      if (!existingCategory) {
        prev.push({
          category: next.attribute.attributeCategory.name,
          sort: next.attribute.attributeCategory.sort,
          attributes: [
            {
              label: next.attribute.name,
              value: next.value,
              sort: next.attribute.sort,
            },
          ],
        })

        return prev
      }

      existingCategory.attributes.push({
        label: next.attribute.name,
        value: next.value,
      })

      return prev
    }, [])

    return sortedInfos
      .map((item) => ({
        category: item.category,
        sort: item.sort,
        attributes: item.attributes.sort((a, b) => a.sort - b.sort),
      }))
      .sort((a, b) => a.sort - b.sort)
  }, [infos, searchValue])

  return (
    <div className={`my-2 flex w-full flex-col  ${className}`}>
      <TextField
        margin="dense"
        size="small"
        style={{
          flex: 1,
          marginLeft: 10,
          marginRight: 10,
        }}
        className=" w-full"
        label="Suche"
        type="search"
        value={searchValue ?? ""}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
        InputProps={{
          endAdornment: (
            <>
              {searchValue && (
                <InputAdornment position="end">
                  <Tooltip title="Reset">
                    <IconButton
                      onClick={() => {
                        setSearchValue("")
                      }}
                      size="large"
                    >
                      <ClearIcon />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              )}
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            </>
          ),
        }}
      />
      {sortedAttributes.map((item) => (
        <div className="my-4" key={item.category}>
          <p className="mb-4 ml-2 text-2xl font-bold">{item.category}</p>
          <InfosBlock
            filterKeys={filterKeys}
            hideKeys={hideKeys}
            infos={item.attributes}
            fontSize={fontSize}
            style={style}
          />
        </div>
      ))}
    </div>
  )
}

export default Infos

interface Props {
  infos: (AttributeValue & {
    attribute: Attribute & { attributeCategory: AttributeCategory }
  })[]
  fontSize?: number
  style?: any
  className?: string
  hideKeys?: boolean
  filterKeys?: boolean
}

interface InfosBlockProps {
  infos: { label: string; value: string }[]
  fontSize?: number
  style?: any
  hideKeys?: boolean
  filterKeys?: boolean
}

export interface Info {
  name: string
  Icon?: any
  value: ReactNode | string
}

import styled from "@emotion/styled";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { chunkify } from "lib/utils";
import { FC, ReactNode, useMemo } from "react";

const KeyWrapper = styled.span<{ fontSize: number }>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  svg {
    margin-right: 5px;
  }
`;

const InfosBlock: FC<Props> = ({
  infos,
  fontSize,
  style,
  hideKeys,
  filterKeys,
  white,
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
  );

  return (
    <Table style={{ width: "initial", flex: 1, ...style }}>
      <TableBody>
        {filteredInfos.map(({ Icon, name, value }) => (
          <TableRow style={{ height: "initial" }} key={name}>
            {Icon && (
              <TableCell style={{ border: "none" }}>
                <Icon />
              </TableCell>
            )}
            {!hideKeys && (
              <TableCell
                style={{
                  textAlign: "left",
                  border: "none",
                  paddingRight: "10px",
                }}
              >
                <KeyWrapper
                  style={{ color: white ? "white" : "black" }}
                  fontSize={fontSize}
                >
                  {name}:
                </KeyWrapper>
              </TableCell>
            )}
            <TableCell
              style={{
                fontSize,
                textAlign: "left",
                border: "none",
                fontWeight: "bold",
                color: white ? "white" : "black",
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
  );
};

const Infos: FC<Props> = ({
  infos,
  fontSize = 18,
  style,
  rows = 2,
  className,
  hideKeys,
  filterKeys,
  white,
}) => {
  const rowsArray = useMemo(() => chunkify(infos, rows, true), [infos, rows]);

  return (
    <div
      className={`my-2 flex w-full flex-col md:flex-row ${
        rowsArray.length > 1 ? "justify-around" : ""
      } ${className}`}
    >
      {rowsArray.map((infos, ind) => (
        <InfosBlock
          white={white}
          filterKeys={filterKeys}
          hideKeys={hideKeys}
          infos={infos}
          key={ind}
          fontSize={fontSize}
          style={style}
        />
      ))}
    </div>
  );
};

export default Infos;

interface Props {
  infos: Info[];
  fontSize?: number;
  style?: any;
  rows?: number;
  className?: string;
  hideKeys?: boolean;
  filterKeys?: boolean;
  white?: boolean;
}

export interface Info {
  name: string;
  Icon?: any;
  value: ReactNode | string;
}

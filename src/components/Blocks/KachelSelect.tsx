import { InputLabel, Paper } from "@mui/material";
import { FC, useState } from "react";
import { useWindowSize } from "react-use";
import Loader from "./Loader";

const KachelSelect: FC<Props> = ({
  data,
  onClick,
  renderCell,
  label,
  isDisabled,
  className,
  initialSelected,
}) => {
  const [selected, setSelected] = useState(
    initialSelected ? data.findIndex((d) => d.value === initialSelected) : null
  );
  const { width } = useWindowSize();

  return (
    <Paper className={`m-2 mt-4 w-full p-4 ${className}`}>
      {label && <InputLabel className="mb-2">{label}</InputLabel>}
      <div className="flex w-full flex-wrap ">
        {data ? (
          data.map((data, ind) => {
            const disabled = isDisabled ? isDisabled(data) : false;

            return (
              <Paper
                style={{
                  margin: 5,
                  width: width > 1300 ? "calc(33% - 10px)" : "calc(50% - 10px)",
                  minHeight: 100,
                }}
                className={`w-full !border-2 p-4 ${
                  disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                } !border-primary-500`}
                key={ind}
                onClick={() => {
                  if (disabled) return;

                  onClick(data);
                  setSelected(ind);
                }}
              >
                {renderCell(data)}
              </Paper>
            );
          })
        ) : (
          <div className="my-4 flex w-full justify-center">
            <Loader className="!h-10 !w-10" />
          </div>
        )}
      </div>
    </Paper>
  );
};

export default KachelSelect;

interface Props {
  data: any[];
  renderCell: (data: any) => JSX.Element;
  onClick: (data: any) => void;
  label?: string;
  isDisabled?: (data: any) => boolean;
  className?: string;
  initialSelected?: any;
}

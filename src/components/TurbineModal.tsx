import { Dialog } from "@mui/material";
import { FC } from "react";
import ParkInfos from "./ParkInfos";

const TurbineModal: FC<Props> = ({ turbine, onClose }) => {
  return (
    <Dialog
      PaperProps={{ style: { border: "none" } }}
      open
      fullWidth
      maxWidth="lg"
      onClose={() => onClose()}
    >
      <h2
        className={`flex justify-center bg-primary-500 p-4 !text-4xl font-bold text-white`}
      >
        Mühle {turbine.parkname}
      </h2>

      <ParkInfos park={turbine} />
    </Dialog>
  );
};

export default TurbineModal;

interface Props {
  turbine: any;
  onClose: () => void;
}

import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import {
  Attribute,
  AttributeCategory,
  AttributeValue,
  Device,
} from "@prisma/client"
import { FC } from "react"
import Infos from "./Blocks/Infos"

const DeviceModal: FC<Props> = ({ device, onClose }) => {
  return (
    <Dialog
      scroll="paper"
      PaperProps={{ style: { border: "none" } }}
      open
      fullWidth
      maxWidth="lg"
      onClose={() => onClose()}
    >
      <DialogTitle
        className={`flex justify-center bg-primary-500 p-4 !text-4xl font-bold text-white`}
      >
        {device.name}
      </DialogTitle>
      <DialogContent>
        <div className="">
          <Infos infos={device.attributeValues} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DeviceModal

interface Props {
  device: Device & {
    attributeValues: (AttributeValue & {
      attribute: Attribute & { attributeCategory: AttributeCategory }
    })[]
  }
  onClose: () => void
}

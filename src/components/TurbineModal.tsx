import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import {
  Attribute,
  AttributeCategory,
  AttributeValue,
  Device,
  WindTurbine,
} from "@prisma/client"
import { FC, useState } from "react"
import Infos from "./Blocks/Infos"
import DeviceModal from "./DeviceModal"
import Section from "./Section"
import Table from "./Table"

const TurbineModal: FC<Props> = ({ turbine, onClose }) => {
  const [isViewingDevice, setIsViewingDevice] = useState(null)

  const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Type", accessor: "type" },
  ]

  return (
    <Dialog
      PaperProps={{ style: { border: "none" } }}
      open
      fullWidth
      maxWidth="lg"
      onClose={() => onClose()}
    >
      <DialogTitle
        className={`flex justify-center bg-primary-500 p-4 !text-4xl font-bold text-white`}
      >
        Mühle {turbine.name}
      </DialogTitle>
      <DialogContent>
        <Section title="Andere">
          <Table
            dynamicHeight
            onRowClick={(row) => setIsViewingDevice(row.original)}
            hideToolbar
            fetching={false}
            title="Andere"
            data={turbine.devices}
            columns={columns}
          />
        </Section>
        <div className="">
          <Infos infos={turbine.attributeValues} />
        </div>
      </DialogContent>
      {isViewingDevice && (
        <DeviceModal
          onClose={() => setIsViewingDevice(null)}
          device={isViewingDevice}
        />
      )}
    </Dialog>
  )
}

export default TurbineModal

interface Props {
  turbine: WindTurbine & {
    devices: (Device & {
      attributeValues: (AttributeValue & {
        attribute: Attribute & { attributeCategory: AttributeCategory }
      })[]
    })[]
    attributeValues: (AttributeValue & {
      attribute: Attribute & { attributeCategory: AttributeCategory }
    })[]
  }
  onClose: () => void
}

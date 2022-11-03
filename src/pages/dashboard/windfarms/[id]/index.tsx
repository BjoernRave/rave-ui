import DeviceModal from "@/components/DeviceModal"
import Section from "@/components/Section"
import Table from "@/components/Table"
import TurbineModal from "@/components/TurbineModal"
import { useQueryParam } from "@/lib/utils"
import Infos from "components/Blocks/Infos"
import Layout from "components/Blocks/Layout"
import PageLoader from "components/Blocks/PageLoader"
import ParkSelector from "components/ParkSelector"
import { trpc } from "lib/trpc"
import { useRouter } from "next/router"
import { FC } from "react"

const Windfarm: FC<Props> = ({}) => {
  const { query, push, isReady } = useRouter()
  const [isViewingTurbine, setIsViewingTurbine] = useQueryParam("turbine", null)
  const [isViewingDevice, setIsViewingDevice] = useQueryParam("device", null)
  const parksResponse = trpc.windFarm.getAll.useQuery()
  const { data, isFetching } = trpc.windFarm.get.useQuery(
    {
      id: Number(query.id),
    },
    { enabled: isReady }
  )

  const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Type", accessor: "type" },
  ]

  const deviceColumns = [
    { Header: "Name", accessor: "name" },
    { Header: "Type", accessor: "type" },
  ]

  if (!data) {
    return <PageLoader />
  }

  return (
    <Layout
      titleComponent={
        <ParkSelector
          label="Windpark"
          options={parksResponse.data ?? []}
          value={data}
          onChange={(park) => {
            if (park) {
              push(`/dashboard/windfarm/${park.id}`)
            }
          }}
        />
      }
      title={`Park ${data.name}`}
    >
      <div className="mt-4  p-2">
        <Section title="Windkraftanlagen">
          <Table
            dynamicHeight
            onRowClick={(row) => setIsViewingTurbine(row.original.id)}
            hideToolbar
            fetching={isFetching}
            title="Windkraftanlagen"
            data={data.turbines}
            columns={columns}
          />
        </Section>
        <Section title="Andere">
          <Table
            dynamicHeight
            onRowClick={(row) => setIsViewingDevice(row.original.id)}
            hideToolbar
            fetching={isFetching}
            title="Andere"
            data={data.devices}
            columns={deviceColumns}
          />
        </Section>
        <Infos infos={data.attributeValues} />
      </div>
      {isViewingTurbine && (
        <TurbineModal
          turbine={data.turbines.find((t) => t.id === isViewingTurbine)}
          onClose={() => setIsViewingTurbine(null)}
        />
      )}
      {isViewingDevice && (
        <DeviceModal
          onClose={() => setIsViewingDevice(null)}
          device={data.devices.find((d) => d.id === isViewingDevice)}
        />
      )}
    </Layout>
  )
}

export default Windfarm

interface Props {}

import Layout from "@/components/Blocks/Layout"
import Table from "@/components/Table"
import ComboBoxFilter from "@/components/Table/Filter/ComboBoxFilter"
import { trpc } from "@/lib/trpc"
import { NextPage } from "next"
import Router from "next/router"

const WindFarms: NextPage<Props> = ({}) => {
  const { data, isFetching } = trpc.windFarm.getAll.useQuery()

  const columns = [
    { Header: "ID", accessor: "farmId" },
    {
      Header: "Gruppe",
      accessor: "group",
      Filter: (props) => <ComboBoxFilter {...props} />,
    },
    { Header: "Name", accessor: "name" },
  ]

  return (
    <Layout title="Windparks">
      <Table
        permissionSuffix="FARM"
        title="Windparks"
        fetching={isFetching}
        columns={columns}
        onRowClick={(row) =>
          Router.push(`/dashboard/windfarms/${row.original.id}`)
        }
        initialSortBy={{ id: "group", desc: false }}
        data={data ?? []}
      />
    </Layout>
  )
}

export default WindFarms

interface Props {}

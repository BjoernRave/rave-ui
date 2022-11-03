import Layout from "@/components/Blocks/Layout"
import Table from "@/components/Table"
import ComboBoxFilter from "@/components/Table/Filter/ComboBoxFilter"
import { trpc } from "@/lib/trpc"
import { Chip } from "@mui/material"
import { NextPage } from "next"
import Router from "next/router"
import { useMemo } from "react"

const WindFarms: NextPage<Props> = ({}) => {
  const { data, isFetching } = trpc.windFarm.getAll.useQuery()

  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "farmId" },
      {
        Header: "Gruppe",
        accessor: "group",
        Filter: (props) => <ComboBoxFilter {...props} />,
      },
      { Header: "Name", accessor: "name" },
      {
        Header: "Windkraftanlagen",
        accessor: (val) => val.turbines.map((t) => t.name).join(", "),
        Cell: ({ row }) =>
          row.original.turbines.map((t) => (
            <Chip
              onClick={(e) => {
                e.stopPropagation()
                Router.push(
                  `/dashboard/windfarms/${row.original.id}?turbine=${t.id}`
                )
              }}
              color="primary"
              style={{ margin: 5 }}
              key={t.id}
              label={t.name}
            />
          )),
      },
    ],
    []
  )

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

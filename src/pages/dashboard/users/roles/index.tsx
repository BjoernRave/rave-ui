import Layout from "@/components/Blocks/Layout"
import Table from "@/components/Table"
import { trpc } from "@/lib/trpc"
import { NextPage } from "next"
import Router from "next/router"

const Roles: NextPage<Props> = ({}) => {
  const { data, isFetching } = trpc.role.getAll.useQuery()

  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Beschreibung",
      accessor: "description",
    },
  ]

  return (
    <Layout title="Rollen">
      <Table
        onCreate={() => Router.push("/dashboard/users/roles/new")}
        onEdit={(row) =>
          Router.push(`/dashboard/users/roles/${row.original.id}/edit`)
        }
        fetching={isFetching}
        columns={columns}
        data={data ?? []}
        title="Rollen"
      />
    </Layout>
  )
}

export default Roles

interface Props {}

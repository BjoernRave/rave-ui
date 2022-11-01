import Layout from "@/components/Blocks/Layout"
import Table from "@/components/Table"
import { trpc } from "@/lib/trpc"
import { NextPage } from "next"

const Roles: NextPage<Props> = ({}) => {
  const { data, isFetching } = trpc.auth.getRoles.useQuery()

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

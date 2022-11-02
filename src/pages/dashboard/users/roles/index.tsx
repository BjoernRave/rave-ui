import ConfirmModal from "@/components/Blocks/ConfirmModal"
import Layout from "@/components/Blocks/Layout"
import Table from "@/components/Table"
import { trpc } from "@/lib/trpc"
import { handleMutation } from "@/lib/utils"
import { NextPage } from "next"
import Router from "next/router"
import { useState } from "react"

const Roles: NextPage<Props> = ({}) => {
  const { data, isFetching } = trpc.role.getAll.useQuery()
  const { mutateAsync } = trpc.role.delete.useMutation()
  const [isDeleting, setIsDeleting] = useState(null)

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
        onDelete={(row) => setIsDeleting(row.original)}
        fetching={isFetching}
        columns={columns}
        data={data ?? []}
        title="Rollen"
      />
      {isDeleting && (
        <ConfirmModal
          message={`Bist du dir sicher, dass du die Rolle ${isDeleting.name} löschen möchtest?`}
          onClose={(confirm) => {
            if (confirm) {
              handleMutation({
                mutateAsync,
                successMessage: "Rolle erfolgreich gelöscht",
                variables: { id: isDeleting.id },
              })
            }
            setIsDeleting(null)
          }}
        />
      )}
    </Layout>
  )
}

export default Roles

interface Props {}

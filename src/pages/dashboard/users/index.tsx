import ConfirmModal from "@/components/Blocks/ConfirmModal"
import UserModal from "@/components/UserModal"
import { handleMutation } from "@/lib/utils"
import Layout from "components/Blocks/Layout"
import Table from "components/Table"
import SelectFilter from "components/Table/Filter/SelectFilter"
import { trpc } from "lib/trpc"
import { NextPage } from "next"
import { useMemo, useState } from "react"

const Nutzerverwaltung: NextPage<Props> = ({}) => {
  const { data, isFetching } = trpc.auth.getAll.useQuery()
  const { mutateAsync } = trpc.auth.delete.useMutation()
  const [isCreating, setIsCreating] = useState(false)
  const [isUpdating, setIsUpdating] = useState(null)
  const [isDeleting, setIsDeleting] = useState(null)

  const columns = useMemo(
    () => [
      {
        Header: "Vorname",
        accessor: "firstName",
      },
      {
        Header: "Nachname",
        accessor: "lastName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Rolle",
        accessor: "role.name",
        Filter: (props) => <SelectFilter {...props} />,
      },
    ],
    []
  )

  return (
    <Layout title="Benutzer">
      <Table
        permissionSuffix="USER"
        columns={columns}
        data={data ?? []}
        fetching={isFetching}
        onCreate={() => setIsCreating(true)}
        onEdit={(row) => setIsUpdating(row.original)}
        onDelete={(row) => setIsUpdating(row.original)}
        title="Benutzer"
      />
      {(isCreating || isUpdating) && (
        <UserModal
          existingUser={isUpdating}
          onClose={() => {
            setIsCreating(false)
            setIsUpdating(null)
          }}
        />
      )}
      {isDeleting && (
        <ConfirmModal
          message={`Bist du dir sicher, dass du den Nutzer ${isDeleting.firstName} ${isDeleting.lastName} löschen möchtest?`}
          onClose={(confirm) => {
            if (confirm) {
              handleMutation({
                mutateAsync,
                successMessage: "Benutzer erfolgreich gelöscht",
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

export default Nutzerverwaltung

interface Props {}

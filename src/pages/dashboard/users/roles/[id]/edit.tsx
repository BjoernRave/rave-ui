import PageLoader from "@/components/Blocks/PageLoader"
import RoleForm from "@/components/Forms/RoleForm"
import { trpc } from "@/lib/trpc"
import { handleMutation } from "@/lib/utils"
import { RoleCreationSchema } from "@/lib/zod-schema"
import { FormPage } from "@/rave-ui"
import { NextPage } from "next"
import Router, { useRouter } from "next/router"

const EditRole: NextPage<Props> = () => {
  const { query } = useRouter()
  const { data: role } = trpc.role.get.useQuery({ id: Number(query.id) })
  const permissionsData = trpc.auth.getPermissions.useQuery()
  const { mutateAsync } = trpc.role.update.useMutation()

  const handleSubmit = async ({ name, description, permissions }) => {
    handleMutation({
      mutateAsync,
      successMessage: "Rolle erfolgreich bearbeitet",
      onSuccess: () => Router.push("/dashboard/users/roles"),
      variables: {
        id: role.id,
        name,
        description,
        permissions: permissions.map(
          (p) => permissionsData?.data.find((d) => d.name === p).id
        ),
      },
    })
  }

  if (!role) return <PageLoader />

  return (
    <FormPage
      onSubmit={handleSubmit}
      validationSchema={RoleCreationSchema}
      title="Rolle bearbeiten"
      initialValues={{
        name: role.name,
        description: role.description,
        permissions: role.permissions.map((p) => p.name),
      }}
    >
      <RoleForm />
    </FormPage>
  )
}

export default EditRole

interface Props {}

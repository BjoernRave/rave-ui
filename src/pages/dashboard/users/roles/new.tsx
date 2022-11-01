import RoleForm from "@/components/Forms/RoleForm"
import { trpc } from "@/lib/trpc"
import { handleMutation } from "@/lib/utils"
import { RoleCreationSchema } from "@/lib/zod-schema"
import { FormPage } from "@/rave-ui"
import { NextPage } from "next"
import Router from "next/router"

const CreateRole: NextPage<Props> = ({}) => {
  const { data } = trpc.auth.getPermissions.useQuery()
  const { mutateAsync } = trpc.role.create.useMutation()

  const handleSubmit = async ({ name, description, permissions }) => {
    handleMutation({
      mutateAsync,
      successMessage: "Rolle erfolgreich erstellt",
      onSuccess: () => Router.push("/dashboard/users/roles"),
      variables: {
        name,
        description,
        permissions: permissions.map((p) => data.find((d) => d.name === p).id),
      },
    })
  }

  return (
    <FormPage
      onSubmit={handleSubmit}
      validationSchema={RoleCreationSchema}
      title="Rolle erstellen"
      initialValues={{ name: "", description: "", permissions: [] }}
    >
      <RoleForm />
    </FormPage>
  )
}

export default CreateRole

interface Props {}

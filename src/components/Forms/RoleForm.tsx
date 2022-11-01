import { trpc } from "@/lib/trpc"
import { PermissionSelect, TextInput } from "@/rave-ui"
import { FC } from "react"

const RoleForm: FC<Props> = ({}) => {
  const { data } = trpc.auth.getPermissions.useQuery()

  return (
    <>
      <TextInput name="name" label="Name" />
      <TextInput name="description" label="Beschreibung" />
      <PermissionSelect permissions={data} name="permissions" />
    </>
  )
}

export default RoleForm

interface Props {}

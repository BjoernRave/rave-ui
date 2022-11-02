import { trpc } from "@/lib/trpc"
import { handleMutation } from "@/lib/utils"
import { UserCreationSchema } from "@/lib/zod-schema"
import {
  EmailInput,
  FormModal,
  PasswordInput,
  SelectInput,
  TextInput,
} from "@/rave-ui"
import { Role, User } from "@prisma/client"
import { FC } from "react"

const UserModal: FC<Props> = ({ onClose, existingUser }) => {
  const createUser = trpc.auth.create.useMutation()
  const updateUser = trpc.auth.update.useMutation()
  const { data } = trpc.role.getAll.useQuery()

  const handleSubmit = async (variables) => {
    await handleMutation({
      mutateAsync: existingUser
        ? updateUser.mutateAsync
        : createUser.mutateAsync,
      successMessage: `Benutzer erfolgreich ${
        existingUser ? "bearbeitet" : "erstellt"
      }`,
      variables: {
        ...variables,
        ...(existingUser && { id: existingUser.id }),
      },
      onSuccess: () => onClose(),
    })
  }

  return (
    <FormModal
      edit={Boolean(existingUser)}
      onClose={onClose}
      initialValues={
        existingUser
          ? {
              firstName: existingUser.firstName,
              lastName: existingUser.lastName,
              email: existingUser.email,
              password: "",
              role: existingUser.role.id,
            }
          : { firstName: "", lastName: "", email: "", password: "", role: null }
      }
      onSubmit={handleSubmit}
      title={`Benutzer ${existingUser ? "bearbeiten" : "erstellen"}`}
      validationSchema={UserCreationSchema}
    >
      <TextInput name="firstName" label="Vorname" />
      <TextInput name="lastName" label="Nachname" />
      <EmailInput name="email" label="E-mail" />
      <PasswordInput name="password" label="Passwort" />
      <SelectInput
        name="role"
        label="Rolle"
        options={data ? data.map((d) => ({ label: d.name, value: d.id })) : []}
      />
    </FormModal>
  )
}

export default UserModal

interface Props {
  onClose: () => void
  existingUser?: User & {
    role: Role
  }
}

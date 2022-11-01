import Layout from "components/Blocks/Layout"
import Table from "components/Table"
import SelectFilter from "components/Table/Filter/SelectFilter"
import { trpc } from "lib/trpc"
import { formatDate, formatDateRelative } from "lib/utils"
import { NextPage } from "next"
import { useMemo } from "react"

const Nutzerverwaltung: NextPage<Props> = ({}) => {
  const { data, isFetching } = trpc.auth.getAll.useQuery()

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
        accessor: "role_name",
        Filter: (props) => <SelectFilter {...props} />,
      },
      {
        Header: "Erstellungsdatum",
        accessor: (val) =>
          val.created ? formatDate(val.created, "daytime") : "-",
      },

      {
        Header: "Letzter Login",
        accessor: (val) =>
          val.last_login
            ? formatDateRelative({
                date: val.last_login,
                withDays: true,
              })
            : "-",
      },
    ],
    []
  )

  return (
    <Layout title="Nutzerverwaltung">
      <Table
        columns={columns}
        data={data ? data : []}
        fetching={isFetching}
        // rowActions={({ row }) => (
        //   <>
        //     {hasPermission(roles, [
        //       'is_admin',
        //       'is_web_admin',
        //       'poc_user_management',
        //     ]) && (
        //       <Tooltip title='Bearbeiten'>
        //         <IconButton
        //           onClick={() => setIsEditingRoles(row.original)}
        //           size='large'>
        //           <EditIcon />
        //         </IconButton>
        //       </Tooltip>
        //     )}
        //     {isRealm && (
        //       <Tooltip title='Magic-Link erneut zusenden'>
        //         <IconButton
        //           onClick={() => setIsConfirmingMagicLink(row.original)}
        //           size='large'>
        //           <EmailIcon />
        //         </IconButton>
        //       </Tooltip>
        //     )}
        //     <Tooltip
        //       title={`Benutzer ${
        //         row.original.status === 'ACTIVE' ? 'deaktivieren' : 'aktivieren'
        //       }`}>
        //       <IconButton
        //         onClick={() =>
        //           setIsChangingStatus({
        //             customer_guid: row.original.customer_guid,
        //             status:
        //               row.original.status === 'ACTIVE' ? 'BLOCKED' : 'ACTIVE',
        //           })
        //         }
        //         size='large'>
        //         {row.original.status === 'ACTIVE' ? (
        //           <svg
        //             xmlns='http://www.w3.org/2000/svg'
        //             fill='none'
        //             viewBox='0 0 24 24'
        //             strokeWidth={1.5}
        //             stroke='currentColor'
        //             className='w-6 h-6'>
        //             <path
        //               strokeLinecap='round'
        //               strokeLinejoin='round'
        //               d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
        //             />
        //           </svg>
        //         ) : (
        //           <svg
        //             xmlns='http://www.w3.org/2000/svg'
        //             fill='none'
        //             viewBox='0 0 24 24'
        //             strokeWidth={1.5}
        //             stroke='currentColor'
        //             className='w-6 h-6'>
        //             <path
        //               strokeLinecap='round'
        //               strokeLinejoin='round'
        //               d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        //             />
        //           </svg>
        //         )}
        //       </IconButton>
        //     </Tooltip>
        //   </>
        // )}
        title="Nutzerverwaltung"
        // toolbarContent={
        //   hasPermission(roles, ['poc_realm_write', 'poc_user_management']) && (
        //     <Button
        //       onClick={() => setIsCreatingUser(true)}
        //       Icon={
        //         <svg
        //           xmlns='http://www.w3.org/2000/svg'
        //           className='w-6 h-6'
        //           fill='none'
        //           viewBox='0 0 24 24'
        //           stroke='currentColor'>
        //           <path
        //             strokeLinecap='round'
        //             strokeLinejoin='round'
        //             strokeWidth={2}
        //             d='M12 6v6m0 0v6m0-6h6m-6 0H6'
        //           />
        //         </svg>
        //       }
        //       iconPosition='back'
        //       className='!p-2'>
        //       Erstelle neuen User
        //     </Button>
        //   )
        // }
      />

      {/* {isCreatingUser && (
        <UserCreationModal
          onClose={(email) => {
            setIsCreatingUser(false)
            if (email) {
              setHasCreatedUser(email)
            }
          }}
        />
      )}
      {isChangingStatus && (
        <ConfirmModal
          message={`Bist du dir sicher, dass du diesen Benutzer ${
            isChangingStatus.status === 'ACTIVE' ? 'aktivieren' : 'deaktivieren'
          }  möchtest?`}
          onClose={async (confirm) => {
            if (confirm) {
              await apiRequest({
                authToken,
                baseUrl,
                method: 'PUT',
                route: '/web/internal/business/login ',
                successMessage: `Benutzer wurde  ${
                  isChangingStatus.status === 'ACTIVE'
                    ? 'aktiviert'
                    : 'deaktiviert'
                }`,
                body: {
                  customer_guid: isChangingStatus.customer_guid,
                  status: isChangingStatus.status,
                },
                onSuccess: () => {
                  refetchACLUsers()
                  refetchUsers()
                },
              })
            }
            setIsChangingStatus(null)
          }}
        />
      )}
      {isConfirmingMagicLink && (
        <ConfirmModal
          message='Bist du dir sicher, dass du diesem Benutzer einen Magic Link zum Einloggen senden möchtest?'
          onClose={async (confirm) => {
            if (confirm) {
              const { subDomain } = getDomainParts()

              await apiRequest({
                authToken: null,
                baseUrl,
                noApiVersion: true,
                method: 'GET',
                route: '/api/auth/login',
                successMessage: 'Magic Link wurde erneut versendet',
                body: {
                  login_email: isConfirmingMagicLink.email,
                  realm_shortname: subDomain,
                },
              })
            }
            setIsConfirmingMagicLink(null)
          }}
        />
      )} */}
    </Layout>
  )
}

export default Nutzerverwaltung

interface Props {}

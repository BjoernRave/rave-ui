import Infos from "components/Blocks/Infos"
import Layout from "components/Blocks/Layout"
import PageLoader from "components/Blocks/PageLoader"
import ParkSelector from "components/ParkSelector"
import { trpc } from "lib/trpc"
import { useRouter } from "next/router"
import { FC } from "react"

const Station: FC<Props> = ({}) => {
  const { query, push } = useRouter()
  const parksResponse = trpc.windFarm.getAll.useQuery()
  const { data } = trpc.windFarm.get.useQuery({ id: Number(query.id) })

  if (!data) {
    return <PageLoader />
  }

  return (
    <Layout
      titleComponent={
        <ParkSelector
          label="Windpark"
          options={parksResponse.data ?? []}
          value={data}
          onChange={(park) => {
            if (park) {
              push(`/dashboard/windfarms/${park.id}`)
            }
          }}
        />
      }
      title={`Park ${data.name}`}
    >
      <div className="mt-4 mb-16 p-2">
        <Infos
          rows={1}
          infos={data.attributeValues.map((a) => ({
            name: a.attribute.name,
            value: a.value,
          }))}
        />
      </div>
    </Layout>
  )
}

export default Station

interface Props {}

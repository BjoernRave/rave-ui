import { trpc } from "lib/trpc";
import { FC } from "react";
import Infos from "./Blocks/Infos";

const ParkInfos: FC<Props> = ({ park }) => {
  const { data } = trpc.attributes.getAll.useQuery();

  return (
    <Infos
      rows={1}
      infos={park.attributes.map((a) => ({
        name: data.find((cat) => cat.id === a.att_id)?.attname,
        value: a.value,
      }))}
    />
  );
};

export default ParkInfos;

interface Props {
  park: any;
}

import { wes_bewegungsdaten_cat, wes_park } from "@prisma/client";
import Table from "components/Table";
import { FC, useMemo, useState } from "react";
import TurbineModal from "./TurbineModal";

const TurbineInfos: FC<Props> = ({ turbines }) => {
  const [showTurbine, setShowTurbine] = useState(null);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "parkname",
      },
    ],
    []
  );

  return (
    <div>
      <Table
        hideToolbar
        onRowClick={(row) => setShowTurbine(row.original)}
        title="Mühlen"
        fetching={false}
        columns={columns}
        data={turbines}
      />
      {showTurbine && (
        <TurbineModal
          turbine={showTurbine}
          onClose={() => setShowTurbine(null)}
        />
      )}
    </div>
  );
};

export default TurbineInfos;

interface Props {
  turbines: ({ attributes: wes_bewegungsdaten_cat[] } & wes_park)[];
}

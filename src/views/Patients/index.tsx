import { useQuery } from "@tanstack/react-query";
import getPatients from "../../components/patients/actions";
import PatientsGrid from "./PatientsGrid";
import DataStateMessage from "../../components/shared/DataStateMessage";
import Loading from "../../components/shared/Loading";

export default function Patients() {
  const { isPending, isError, data } = useQuery({ queryKey: ["patients"], queryFn: getPatients });

  return (
    <div className="flex h-full w-full flex-col overflow-hidden pb-12">
      <h1 className="mb-2 text-3xl font-bold lg:text-4xl">Patients</h1>
      <h2 className="mb-16 text-sm text-gray-500 lg:text-base">
        General overview of patients registered in the system.
      </h2>
      {isPending ? <Loading /> : null}
      {isError ? (
        <DataStateMessage
          title="There was an error getting the patients"
          description="Please try again later."
          type="error"
        />
      ) : null}
      {data ? <PatientsGrid patients={data} /> : null}
    </div>
  );
}

import PatientsGrid from "./PatientsGrid";
import DataStateMessage from "../../components/shared/DataStateMessage";
import Loading from "../../components/shared/Loading";
import { usePagination } from "../../hooks/usePagination";
import Pagination from "../../components/shared/Pagination";
import usePatients from "../../hooks/usePatients";
import Button from "../../components/shared/Button";
import { useModal } from "../../contexts/ModalContext";
import { PatientForm } from "../../components/patients/form/PatientForm";

export default function Patients() {
  const { isPending, isError, data } = usePatients();
  const { openModal } = useModal();

  // The API endpoint doesn't support pagination, so we use client-side pagination
  const { currentPage, totalPages, paginatedData, nextPage, prevPage } = usePagination(data ?? []);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden sm:pb-5">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-3xl font-bold lg:text-4xl">Patients</h1>
        <Button variant="primary" label="New Patient" onClick={() => openModal(<PatientForm />)} />
      </div>
      <h2 className="mb-8 text-sm text-gray-500 sm:mb-10 lg:text-base">
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
      {data ? <PatientsGrid patients={paginatedData} /> : null}
      <Pagination
        data={data ?? []}
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

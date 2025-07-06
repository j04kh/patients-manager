import { useQuery, useQueryClient } from "@tanstack/react-query";
import getPatients from "../components/patients/actions";
import type { Patient } from "../components/patients/types";

/**
 * Custom hook to manage patient data using TanStack Query.
 * Fetches a list of patients and provides local-only methods to add and update them.
 * Changes are made directly in the query cache and are not persisted.
 */
export default function usePatients() {
  const queryClient = useQueryClient();

  const { isPending, isError, data } = useQuery({ 
    queryKey: ["patients"],
    queryFn: getPatients,
  });

  function createPatient(newItem: Patient) {
    queryClient.setQueryData(['patients'], (oldData: Patient[]) => [newItem, ...oldData]);
  };

  function updatePatient(updatedItem: Patient) {
    queryClient.setQueryData(['patients'], (oldData: Patient[]) =>
      oldData.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  }

  return { isPending, isError, data, createPatient, updatePatient };
}
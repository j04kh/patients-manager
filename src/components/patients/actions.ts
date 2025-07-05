import type { Patient } from "./types";

const BASE_URL = import.meta.env.VITE_API_BASE_PATH;

/**
 * Function used to fetch the list of Patients from api/users endpoint
 * @returns the list of all Patients
 */
export default async function getPatients(): Promise<Patient[]> {
  const res = await fetch(`${BASE_URL}/users`);
  
  if (!res.ok) throw new Error('Something went wrong while getting patients.');
  
  const data = await res.json();
  
  return data;
}
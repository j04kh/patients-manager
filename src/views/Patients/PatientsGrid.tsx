import { useEffect, useRef } from "react";
import PatientCard from "../../components/patients/PatientCard";
import type { Patient } from "../../components/patients/types";
import DataStateMessage from "../../components/shared/DataStateMessage";

interface Props {
  patients: Patient[];
}

export default function PatientsGrid({ patients }: Props) {
  const gridContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Reset grid scroll-Y position on pagination change
    const el = gridContainerRef.current;
    if (el) {
      el.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [patients]);

  if (!patients.length) {
    return <DataStateMessage title="No patients found" description="No patients were found." type="empty" />;
  }

  return (
    <section
      ref={gridContainerRef}
      className="grid h-full w-full grid-cols-[repeat(auto-fill,minmax(250px,1fr))] content-start gap-3 overflow-y-auto pr-3 pb-3"
    >
      {patients.map(({ id, name, description, avatar, website }) => (
        <PatientCard key={id} name={name} avatar={avatar} website={website} description={description} />
      ))}
    </section>
  );
}

import { useState } from "react";
import { Modal } from "../../shared/Modal";

export function PatientForm() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>View Patient</button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <span className="text-lg font-bold">Patient Info</span>
        <p className="mt-2">Form here</p>
        <div className="mt-4 text-right">
          <button onClick={() => setOpen(false)} className="text-blue-500">
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}

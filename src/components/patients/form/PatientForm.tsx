import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import Avatar from "../Avatar";
import Input from "../../shared/inputs/Input";
import type { Patient } from "../types";
import Button from "../../shared/Button";
import { INITIAL_VALUES, validateWebsite } from "./utils";
import usePatients from "../../../hooks/usePatients";
import { useModal } from "../../../contexts/ModalContext";
import toast from "react-hot-toast";

type PatientFormValues = Omit<Patient, "createdAt">;

interface Props {
  values?: PatientFormValues;
}

export function PatientForm({ values }: Props) {
  const methods = useForm<PatientFormValues>({
    defaultValues: values ?? INITIAL_VALUES,
  });

  const onSubmit: SubmitHandler<PatientFormValues> = (data: PatientFormValues) => {
    // Note: Using createdAt instead of updatedAt to match API patients object format
    const patientData = { ...data, createdAt: new Date().toISOString() };

    if (isEdit) {
      updatePatient(patientData);
      toast.success("Patient successfully updated!");
    } else {
      // Note: Since it's client-side data only, not persisted, ids are
      // generated with crypto.randomUUID()
      createPatient({ ...patientData, id: crypto.randomUUID() });
      toast.success("Patient successfully created!");
    }
    closeModal();
  };

  const { createPatient, updatePatient } = usePatients();

  const { closeModal } = useModal();

  const isEdit = !!values?.id;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex h-fit w-full flex-col bg-white p-4">
        <span className="text-xl font-semibold">{`${isEdit ? "Edit" : "Create"} Patient`}</span>
        <div className="flex w-full justify-center py-2">
          <Avatar variant="big" src={values?.avatar ?? ""} patientName={values?.name ?? ""} />
        </div>
        <Input name="name" label="Full Name" placeholder="John Doe" required />
        <Input
          name="website"
          label="Website"
          placeholder="https://my-website.io"
          validate={(value: string) => validateWebsite(value)}
          required
        />
        <Input
          name="description"
          label="Description"
          placeholder="Details about the patient..."
          type="textarea"
          required
        />
        <div className="flex flex-col gap-y-2 pt-4">
          <Button label={`${isEdit ? "Update" : "Create"}`} variant="primary" />
          <Button label="Cancel" variant="secondary" onClick={() => closeModal()} type="button" />
        </div>
      </form>
    </FormProvider>
  );
}

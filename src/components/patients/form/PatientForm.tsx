import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import Avatar from "../Avatar";
import Input from "../../shared/inputs/Input";
import type { Patient } from "../types";
import Button from "../../shared/Button";
import { INITIAL_VALUES, validateWebsite } from "./utils";

type PatientFormValues = Partial<Patient>;

interface Props {
  values?: PatientFormValues;
}

export function PatientForm({ values }: Props) {
  const methods = useForm<PatientFormValues>({
    defaultValues: values ?? INITIAL_VALUES,
  });

  const onSubmit: SubmitHandler<PatientFormValues> = () => {
    // TODO: Add actions
    console.log("submited!");
  };

  const isEdit = !!values;

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
          <Button label="Cancel" variant="secondary" onClick={() => {}} type="button" />
        </div>
      </form>
    </FormProvider>
  );
}

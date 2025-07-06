import { useFormContext } from "react-hook-form";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";

type InputTypes = "text" | "textarea";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  type?: InputTypes;
  required?: boolean;
  validate?: (value: string) => boolean | string;
}

export default function Input({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  validate = () => true,
}: Props) {
  const {
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string;

  const InputsMap: Record<InputTypes, React.ReactElement> = {
    text: <TextInput name={name} label={label} placeholder={placeholder} required={required} validate={validate} />,
    textarea: (
      <TextAreaInput name={name} label={label} placeholder={placeholder} required={required} validate={validate} />
    ),
  };

  return (
    <div className="flex w-full flex-col items-start">
      <label className="pm-label" htmlFor={`${name}-input`}>
        {label}
      </label>
      {InputsMap[type]}
      <span aria-hidden={!errorMessage?.length} className="pm-input-error">
        {errorMessage}
      </span>
    </div>
  );
}

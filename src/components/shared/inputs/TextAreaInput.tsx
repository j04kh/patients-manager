import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  validate?: (value: string) => boolean | string;
}

export default function TextAreaInput({ name, label, placeholder, required = false, validate }: Props) {
  const { register } = useFormContext();

  return (
    <textarea
      {...register(name, {
        required: required ? `${label} is required` : false,
        validate: validate,
      })}
      rows={3}
      placeholder={placeholder}
      className="pm-input"
      id={`${name}-input`}
    />
  );
}

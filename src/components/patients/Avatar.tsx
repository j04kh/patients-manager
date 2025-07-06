import { FALLBACK_IMG_PATH, handleImageError } from "../../utils/images";

interface Props {
  src: string;
  patientName: string;
  variant?: "normal" | "big";
}

export default function Avatar({ src, patientName, variant = "normal" }: Props) {
  return (
    <img
      src={src || FALLBACK_IMG_PATH}
      className={`${variant === "big" ? "size-18" : "size-12"} aspect-square flex-shrink-0 rounded-full object-cover object-center`}
      alt={`${patientName}'s avatar`}
      onError={(e) => handleImageError(e)}
    />
  );
}

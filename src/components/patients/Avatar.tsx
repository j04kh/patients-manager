import { FALLBACK_IMG_PATH, handleImageError } from "../../utils/images";

interface Props {
  src: string;
  patientName: string;
}

export default function Avatar({ src, patientName }: Props) {
  return (
    <img
      src={src || FALLBACK_IMG_PATH}
      className="aspect-square size-12 flex-shrink-0 rounded-full object-cover object-center"
      alt={`${patientName}'s avatar`}
      onError={(e) => handleImageError(e)}
    />
  );
}

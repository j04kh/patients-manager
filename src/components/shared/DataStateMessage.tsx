type MessageType = "empty" | "error";

interface Props {
  title: string;
  description: string;
  type: MessageType;
}

const EMPTY_STATE_IMAGE = "/images/empty-users.svg";
const ERROR_STATE_IMAGE = "/images/error.svg";

/**
 *  Renders a reusable error or empty state UI with an illustration, title, and description.
 *
 * @example
 * <DataStateMessage
 *   title="No results found"
 *   description="Try adjusting your filters or search term."
 *   type="empty"
 * />
 */
export default function DataStateMessage({ title, description, type = "empty" }: Props) {
  const ImageMap: Record<MessageType, string> = {
    empty: EMPTY_STATE_IMAGE,
    error: ERROR_STATE_IMAGE,
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <img className="mb-4 size-28" aria-hidden alt="Message illustration" src={ImageMap[type]} />
      <span className="mb-1 text-xl font-semibold">{title}</span>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

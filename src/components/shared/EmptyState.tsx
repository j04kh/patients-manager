interface Props {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: Props) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <img className="mb-4 size-20" aria-hidden alt="Empty state users" src="./src/assets/images/empty-users.svg" />
      <span className="mb-1 text-xl font-semibold">{title}</span>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

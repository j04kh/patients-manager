export default function Loading() {
  return (
    <div className="grid h-full w-full place-items-center">
      <span className="sr-only">Loading...</span>
      <img src="./src/assets/images/spinner.png" aria-hidden alt="Loading spinner" className="size-16 animate-spin" />
    </div>
  );
}

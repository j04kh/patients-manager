import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex h-12 w-full flex-shrink-0 items-center justify-between border-b border-gray-300 bg-white px-4 sm:px-6 lg:h-16 lg:justify-end">
      <button type="button" aria-label="Open menu" className="flex-shrink-0 cursor-pointer lg:hidden">
        <Bars3Icon className="size-8 stroke-2" />
      </button>
      <img src="/pm-logo.png" alt="Patients Manager logo" className="h-2/3 lg:hidden" />
      <div className="flex items-center gap-x-3">
        <span className="hidden font-medium sm:flex">John Doe</span>
        <img src="/images/profile.avif" alt="Profile picture" className="size-8 rounded-full lg:size-9" />
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <header className="flex h-12 w-full flex-shrink-0 items-center justify-between border-b border-gray-300 bg-white px-6 lg:h-16 lg:justify-end">
      <div className="flex-shrink-0 pl-3 lg:hidden">{/* TODO: Hamburger item on mobile, hidden on desktop */}</div>
      <div className="flex items-center gap-x-3">
        <span className="font-medium">John Doe</span>
        <img src="./src/assets/images/profile.avif" alt="Profile picture" className="size-8 rounded-full lg:size-9" />
      </div>
    </header>
  );
}

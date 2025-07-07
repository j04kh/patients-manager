import ROUTES from "../../../constants";
import NavigationItem from "./NavigationItem";

export default function Sidebar() {
  return (
    <aside className="hidden h-full w-[14rem] border-r border-gray-300 bg-white lg:flex lg:h-screen lg:flex-shrink-0 lg:flex-col">
      <div className="flex h-16 flex-shrink-0 items-center justify-center pr-4">
        <img src="/pm-logo.png" className="h-9" alt="Patients Manager logo" />
      </div>
      <nav className="h-full w-full px-3 pt-6">
        <ul className="flex flex-col gap-y-4">
          <NavigationItem label="Dashboard" href={ROUTES.HOME} />
          <NavigationItem active label="Patients" href={ROUTES.PATIENTS} />
          <NavigationItem label="Appointments" href={ROUTES.APPOINTMENTS} />
          <NavigationItem label="Reports" href={ROUTES.REPORTS} />
          <NavigationItem label="Settings" href={ROUTES.SETTINGS} />
        </ul>
      </nav>
    </aside>
  );
}

import { CalendarDaysIcon, ChartPieIcon, Cog8ToothIcon, HomeIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/solid";
import ROUTES from "../../../constants";

interface Props {
  active?: boolean;
  label: string;
  href: string;
}

// Type used to map routes to icons
type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export default function NavigationItem({ active = false, label, href }: Props) {
  return (
    <li
      className={`flex w-full rounded-lg py-1 text-gray-800 ${
        active
          ? "bg-slate-100 font-semibold hover:bg-slate-200/75"
          : "bg-transparent font-normal text-gray-800 hover:bg-gray-200"
      } transition-all`}
    >
      {/* Using pointer-events-none to disable links since we don't have routing implemented */}
      <a href={href} className="pointer-events-none flex h-11 w-full items-center gap-2 px-8 py-3">
        <NavigationItemIcon route={href as RoutePath} />
        <span className="ml-2 text-base">{label}</span>
      </a>
    </li>
  );
}

function NavigationItemIcon({ route }: { route: RoutePath }) {
  // If this had real routing, we'd also need to handle active/non-active states,
  // this assumes Patients is the active route.
  const IconMap: Record<RoutePath, React.ReactElement> = {
    [ROUTES.HOME]: <HomeIcon className="size-5" />,
    [ROUTES.PATIENTS]: <UsersIcon className="size-5" />,
    [ROUTES.APPOINTMENTS]: <CalendarDaysIcon className="size-5" />,
    [ROUTES.REPORTS]: <ChartPieIcon className="size-5" />,
    [ROUTES.SETTINGS]: <Cog8ToothIcon className="size-5" />,
  };

  return IconMap[route];
}

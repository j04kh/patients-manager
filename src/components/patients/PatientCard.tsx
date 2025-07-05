import { useState } from "react";
import { ArrowTopRightOnSquareIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";

interface Props {
  name: string;
  avatar: string;
  website: string;
  description: string;
}

export default function PatientCard({ name, avatar, website, description }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      aria-expanded={expanded}
      className="flex h-full max-h-fit w-full flex-col gap-y-3 rounded-lg bg-white p-5 pb-3 shadow-sm shadow-slate-200"
    >
      <div className="flex w-full items-center gap-x-2">
        <img src={avatar} alt="" className="aspect-square size-12 flex-shrink-0 rounded-full" />
        <div className="flex w-full flex-col gap-y-0.5">
          <span className="line-clamp-1 font-medium text-ellipsis">{name}</span>
          <a target="_blank" href={website} aria-label={`${name}'s website (Opens in a new tab)`}>
            <span className="flex items-center gap-x-0.5">
              <ArrowTopRightOnSquareIcon className="size-3.5 stroke-2 pb-px" />
              <span className="text-xs">Website</span>
            </span>
          </a>
        </div>
        <button className="cursor-pointer" type="button">
          <span className="sr-only">Open patient options</span>
          <EllipsisVerticalIcon className="size-5" />
        </button>
      </div>
      <div className="w-full max-w-full overflow-hidden">
        <p className={`${expanded ? "" : "line-clamp-2 text-ellipsis"} text-sm text-gray-500`}>{description}</p>
      </div>
      <div className="flex w-full justify-end">
        <button className="cursor-pointer" onClick={() => setExpanded((value) => !value)} type="button">
          <span className="text-xs">{expanded ? "See less" : "See more"}</span>
        </button>
      </div>
    </article>
  );
}

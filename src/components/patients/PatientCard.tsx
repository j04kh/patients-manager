import { useEffect, useRef, useState } from "react";
import { ArrowsPointingInIcon, ArrowsPointingOutIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { capitalizeName, formatPatientDescription, isValidUrl } from "../../utils/patients";
import Avatar from "./Avatar";
import { useModal } from "../../contexts/ModalContext";
import { PatientForm } from "./form/PatientForm";
import { motion } from "framer-motion";
import ExpandableText from "../shared/ExpandableText";

interface Props {
  id: string;
  name: string;
  avatar: string;
  website: string;
  description: string;
}

export default function PatientCard({ id, name, avatar, website, description }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const { openModal } = useModal();

  const patientName = capitalizeName(name) || "No Name";

  useEffect(() => {
    // Note: We can also subscribe to window resize events to handle
    // the overflow. Won't add that here to keep it simple.
    const el = descriptionRef.current;
    if (el) {
      setHasOverflow(el.scrollHeight > el.clientHeight);
    }
  }, [description]);

  return (
    <motion.article
      aria-expanded={expanded}
      className="flex h-full max-h-fit w-full flex-col gap-y-3 rounded-lg bg-white p-5 pb-3 shadow-sm shadow-slate-200"
      layout
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <motion.div layout={false} className="flex w-full items-center gap-x-2">
        <Avatar src={avatar} patientName={patientName} />
        <div className="flex w-full flex-col gap-y-0.5">
          <span title={patientName} className="line-clamp-1 font-medium text-ellipsis">
            {patientName}
          </span>
          {isValidUrl(website) ? (
            <a target="_blank" href={website} aria-label={`${patientName}'s website (Opens in a new tab)`}>
              <span className="flex items-center gap-x-0.5 hover:underline">
                <ArrowTopRightOnSquareIcon className="size-3.5 stroke-2 pb-px" />
                <span className="text-xs">Website</span>
              </span>
            </a>
          ) : null}
        </div>
      </motion.div>
      <div className="w-full max-w-full overflow-hidden">
        <ExpandableText text={formatPatientDescription(description)} expanded={expanded} ref={descriptionRef} />
      </div>
      <div className="flex h-6 w-full items-center justify-between">
        <button
          onClick={() => openModal(<PatientForm values={{ id, name: patientName, avatar, description, website }} />)}
          className="cursor-pointer self-start text-sky-800"
          type="button"
        >
          <span className="text-sm">Edit</span>
        </button>
        {hasOverflow && (
          <button className="cursor-pointer" onClick={() => setExpanded((value) => !value)} type="button">
            {expanded ? <ArrowsPointingInIcon className="size-4.5" /> : <ArrowsPointingOutIcon className="size-4.5" />}
          </button>
        )}
      </div>
    </motion.article>
  );
}

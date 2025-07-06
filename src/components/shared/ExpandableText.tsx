import { AnimatePresence, motion } from "framer-motion";

interface Props {
  expanded: boolean;
  text: string;
  ref?: React.Ref<HTMLParagraphElement>;
}

/**
 * Displays a single-line truncated or fully expanded text block
 * with smooth height and opacity animations using Framer Motion.
 * The ref can be used to know if there's overflow or not.
 */
export default function ExpandableText({ expanded, text, ref }: Props) {
  return (
    <AnimatePresence>
      {expanded ? (
        <motion.p
          key="expanded-text"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="text-sm text-gray-500"
        >
          {text}
        </motion.p>
      ) : (
        <p ref={ref} className="line-clamp-1 text-sm text-ellipsis text-gray-500">
          {text}
        </p>
      )}
    </AnimatePresence>
  );
}

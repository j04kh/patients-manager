import ReactDOM from "react-dom";

interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ onClose, children }: Props) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700/50" onClick={onClose}>
      <div
        className="mx-6 w-full max-w-[28rem] rounded-lg bg-white p-4 shadow-lg sm:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

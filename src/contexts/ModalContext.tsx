import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { Modal } from "../components/shared/Modal";
import { AnimatePresence } from "framer-motion";

interface ModalContextType {
  openModal: (component: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Export context as a hook
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within a ModalProvider");
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = (component: ReactNode) => setModalContent(component);
  const closeModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AnimatePresence>{modalContent && <Modal onClose={closeModal}>{modalContent}</Modal>}</AnimatePresence>
    </ModalContext.Provider>
  );
};

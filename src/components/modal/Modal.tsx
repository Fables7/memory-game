import { useEffect, useRef } from "react";

interface ModalProps {
  children: React.ReactNode;
  setOpen: (open: boolean) => void;
}

const Modal = ({ children, setOpen }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className=" w-full h-screen bg-black bg-opacity-50 backdrop-blur-sm fixed top-0 left-0 z-50 flex items-center justify-center">
      <div ref={modalRef}>{children}</div>
    </div>
  );
};

export default Modal;

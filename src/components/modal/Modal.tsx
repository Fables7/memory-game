import { useEffect, useRef } from "react";
import clsx from "clsx";

interface ModalProps {
  children: React.ReactNode;
  setOpen: (open: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Modal = ({ children, setOpen, className, style }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const rootClassName = clsx(
    "w-[327px] bg-[var(--menu-gray)] rounded-xl flex flex-col p-5",
    className
  );

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
  }, [setOpen]);
  return (
    <div className=" w-full h-screen bg-black bg-opacity-50 backdrop-blur-sm fixed top-0 left-0 z-50 flex items-center justify-center">
      <div className={rootClassName} style={style} ref={modalRef}>
        {children}
      </div>
    </div>
  );
};

export default Modal;

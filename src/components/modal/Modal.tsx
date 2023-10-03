import Link from "next/link";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className=" w-full h-screen bg-black bg-opacity-50 backdrop-blur-sm fixed top-0 left-0 z-50 ">
      <Link href="/" />
      {children}
    </div>
  );
};

export default Modal;

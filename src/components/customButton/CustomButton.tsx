import clsx from "clsx";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  active?: boolean;
  activeColor?: string;
}

const CustomButton = ({ children, className, ...props }: CustomButtonProps) => {
  const rootClassName = clsx("");
  return (
    <button {...props} className={`h-[40px] bg-[var(--idle)] rounded-lg`}>
      {children}
    </button>
  );
};

export default CustomButton;

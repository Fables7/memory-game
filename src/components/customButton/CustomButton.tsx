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
  const rootClassName = clsx(
    "h-[40px] bg-[var(--idle)] rounded-3xl w-full hover:bg-[var(--hover)]",
    className
  );
  return (
    <button
      {...props}
      style={{ backgroundColor: props.active ? "var(--active)" : undefined }}
      className={rootClassName}
    >
      {children}
    </button>
  );
};

export default CustomButton;

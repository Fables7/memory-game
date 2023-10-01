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

const CustomButton = (props: CustomButtonProps) => {
  const rootClassName = clsx(
    "h-[40px] bg-[var(--idle)] rounded-3xl w-full hover:bg-[var(--hover)]",
    props.className
  );
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      style={{ backgroundColor: props.active ? "var(--active)" : undefined }}
      className={rootClassName}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;

import clsx from "clsx";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  active?: boolean;
  activeColor?: string;
  primary?: boolean;
  secondary?: boolean;
  option?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  const rootClassName = clsx(
    "h-[48px] md:h-[70px] md:text-[2rem]  bg-[var(--idle)] rounded-3xl w-full hover:bg-[var(--hover)]",
    props.option && "h-[40px] md:h-[51px] md:text-[1.625rem]  ",
    props.active && "bg-[var(--menu-active)]",
    props.primary && "bg-[var(--orange-accent)] hover:bg-[var(--orange-hover)]",
    props.secondary &&
      "bg-[var(--light-gray)] text-[var(--menu-active)]  hover:text-white ",
    props.className
  );
  return (
    <button type={props.type} onClick={props.onClick} className={rootClassName}>
      {props.children}
    </button>
  );
};

export default CustomButton;

import clsx from "clsx";
import { StyledCustomButton } from "./StyledCustomButton";

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
    "h-[48px] bg-[var(--idle)] rounded-3xl w-full hover:bg-[var(--hover)]",
    props.className
  );
  return (
    <StyledCustomButton
      active={props.active}
      primary={props.primary}
      secondary={props.secondary}
      option={props.option}
      type={props.type}
      onClick={props.onClick}
      className={rootClassName}
    >
      {props.children}
    </StyledCustomButton>
  );
};

export default CustomButton;

{
  /* <button
type={props.type}
onClick={props.onClick}
style={{
  backgroundColor: props.active
    ? "var(--menu-active)"
    : props.primary
    ? "var(--orange-accent)"
    : undefined,
}}
className={rootClassName}
>
{props.children}
</button> */
}

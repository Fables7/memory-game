import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const GridButton = ({
  card,
  handleChoice,
  flipped,
  matched,
  theme,
  gridSize,
  disabled,
}: any) => {
  const rootClassName = clsx(
    "rounded-full h-[73px] w-[73px] ",
    gridSize === "4x4"
      ? "h-[73px] w-[73px] md:h-[118px] md:w-[118px]"
      : "h-[47px] h-[47px]",
    matched
      ? "bg-[var(--idle)]"
      : flipped
      ? "bg-[var(--orange-accent)]"
      : "bg-[var(--main-background)]"
  );
  const iconClassName = clsx(
    !matched && !flipped ? "hidden" : "inline",
    gridSize === "4x4" ? "text-[2.5rem] md:text-[3.5rem]" : "text-[1.5rem]"
  );
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <button className={rootClassName} onClick={handleClick} disabled={disabled}>
      <div className={iconClassName}>
        {theme === "Icons" ? <FontAwesomeIcon icon={card.icon} /> : card.icon}
      </div>
    </button>
  );
};

export default GridButton;

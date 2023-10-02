import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GridButton = ({
  card,
  handleChoice,
  flipped,
  matched,
  theme,
  gridSize,
  disabled,
}: any) => {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <button
      style={{
        height: gridSize === "4x4" ? "73px" : "47px",
        width: gridSize === "4x4" ? "73px" : "47px",
        background: matched
          ? "var(--idle)"
          : flipped
          ? "var(--orange-accent)"
          : "var(--main-background)",
      }}
      className=" rounded-full h-[73px] w-[73px] bg-[var(--main-background)]"
      onClick={handleClick}
      disabled={disabled}
    >
      <div
        style={{
          display: !matched && !flipped ? "none" : "inline",
          fontSize: gridSize === "4x4" ? "2.5rem" : "1.5rem",
        }}
      >
        {theme === "Icons" ? <FontAwesomeIcon icon={card.icon} /> : card.icon}
      </div>
    </button>
  );
};

export default GridButton;

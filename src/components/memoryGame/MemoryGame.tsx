"use client";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  IconLookup,
  IconName,
  IconPrefix,
} from "@fortawesome/free-regular-svg-icons";

interface GameGridProps {
  theme: string;
  array: (IconDefinition | number)[];
  gridSize: string;
}

const GameGrid = ({ theme, array, gridSize }: GameGridProps) => {
  const GridButton = (icon: any, index: any) => {
    return (
      <button
        className=" rounded-full h-[47px] w-[47px] bg-[var(--orange-accent)]"
        key={index}
      >
        {theme === "Icons" ? <FontAwesomeIcon icon={icon} /> : icon}
      </button>
    );
  };
  const displayGrid = () => {
    return array.map((icon, index) => {
      return GridButton(icon, index);
    });
  };
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${
          gridSize === "4x4" ? 4 : 6
        }, minmax(0, 1fr))`,
      }}
      className="grid  grid-cols-4 gap-5"
    >
      {displayGrid()}
    </div>
  );
};

const MemoryGame = () => {
  const { theme, numPlayers, gridSize, array } = useSelector(
    (state: any) => state.memoryGame
  );

  return (
    <div>
      <h1 className="text-black">Memory Game</h1>

      <GameGrid array={array} theme={theme} gridSize={gridSize} />
    </div>
  );
};

export default MemoryGame;

"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

interface GameGridProps {
  theme: string;
  array: (IconDefinition | number)[];
  gridSize: string;
  choiceOne: IconDefinition | number | null;
  choiceTwo: IconDefinition | number | null;
  handleChoice: (choice: IconDefinition | number) => void;
}

const GameGrid = ({
  theme,
  array,
  gridSize,
  choiceOne,
  choiceTwo,
  handleChoice,
}: GameGridProps) => {
  const GridButton = (icon: any, index: any) => {
    const selected = choiceOne === icon.icon || choiceTwo === icon.icon;
    const [matched, setMatched] = useState(false);

    return (
      <button
        style={{
          background: matched
            ? "var(--orange-accent)"
            : selected
            ? "var(--idle)"
            : "var(--main-background)",
        }}
        className=" rounded-full h-[47px] w-[47px] bg-[var(--main-background)]"
        key={index}
        disabled={matched}
        onClick={() => handleChoice(icon)}
      >
        <div style={{ display: !selected && !matched ? "none" : "inline" }}>
          {theme === "Icons" ? <FontAwesomeIcon icon={icon.icon} /> : icon.icon}
        </div>
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
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [turns, setTurns] = useState(0);

  const handleChoice = (choice: any) => {
    choiceOne ? setChoiceTwo(choice) : setChoiceOne(choice);
  };

  return (
    <div>
      <h1 className="text-black">Memory Game</h1>

      <GameGrid
        array={array}
        theme={theme}
        gridSize={gridSize}
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
        handleChoice={handleChoice}
      />
    </div>
  );
};

export default MemoryGame;

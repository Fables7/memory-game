"use client";
import { useState } from "react";
import { CustomButton } from "..";

interface OptionsContainerProps {
  options: string[];
  active: string | number;
  setActive: (option: string) => void;
  label: string;
}

const OptionsContainer = ({
  options,
  setActive,
  active,
  label,
}: OptionsContainerProps) => {
  const onClickHandler = (option: string) => () => {
    setActive(option);
  };
  return (
    <>
      <label className="mb-2">{label}</label>
      <div className="grid grid-flow-col gap-2 mb-5">
        {options.map((option, index) => (
          <CustomButton
            active={option === active}
            key={index}
            onClick={onClickHandler(option)}
          >
            {option}
          </CustomButton>
        ))}
      </div>
    </>
  );
};

const StartGameForm = () => {
  const [theme, setTheme] = useState("Numbers");
  const [playerNum, setPlayerNum] = useState("1");
  const [gridSize, setGridSize] = useState("4x4");

  const themeOptions = ["Numbers", "Icons"];
  const playerOptions = ["1", "2", "3", "4"];
  const gridSizeOptions = ["4x4", "6x6"];

  const formSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <div className="  min-w-[327px] h-[386px] bg-[var(--white)] rounded-lg p-5 ">
      <form className="flex flex-col h-full" onSubmit={formSubmitHandler}>
        <OptionsContainer
          label="Select Theme"
          options={themeOptions}
          active={theme}
          setActive={setTheme}
        />

        <OptionsContainer
          label="Number of Players"
          options={playerOptions}
          active={playerNum}
          setActive={setPlayerNum}
        />

        <OptionsContainer
          label="Grid Size"
          options={gridSizeOptions}
          active={gridSize}
          setActive={setGridSize}
        />
        <CustomButton className="bg-[var(--orange-accent)] hover:bg-[var(--orange-hover)] mt-auto h-[48px]">
          Start Game
        </CustomButton>
      </form>
    </div>
  );
};

export default StartGameForm;

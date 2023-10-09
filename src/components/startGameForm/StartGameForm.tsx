"use client";
import { useState } from "react";
import { CustomButton } from "..";
import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../../../store/memoryGame";

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
      <label className="mb-2 md:mb-4 md:text-xl ">{label}</label>
      <div className="grid grid-flow-col gap-3 md:gap-8 mb-5">
        {options.map((option, index) => (
          <CustomButton
            active={option === active}
            key={index}
            onClick={onClickHandler(option)}
            type="button"
            option
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

  const dispatch = useDispatch();

  const formSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(
      startGame({
        theme,
        numPlayers: Number(playerNum),
        gridSize,
        startGame: true,
      })
    );
    console.log("pressed");
  };
  return (
    <div className="flex flex-col items-center pt-24  ">
      <h1 className="text-white mb-12">memory</h1>

      <div className="  min-w-[327px] h-[386px] md:min-w-[654px] md:h-[559px] bg-[var(--white)] rounded-lg p-5 md:p-12 ">
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
          <CustomButton type="submit" primary className="  mt-auto h-[48px]">
            Start Game
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default StartGameForm;

"use client";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MemoryGame = () => {
  const { theme, numPlayers, gridSize, array } = useSelector(
    (state: any) => state.memoryGame
  );
  if (theme === "Icons")
    array.map((icon: any, index: number) => (
      <FontAwesomeIcon key={index} icon={icon} />
    ));
};

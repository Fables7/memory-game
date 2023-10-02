"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GridButton } from "..";

import {
  IconDefinition,
  faFutbol,
  faMoon,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAnchor,
  faFlask,
  faSun,
  faHandSpock,
  faBug,
  faSnowflake,
  faTurkishLiraSign,
  faCar,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTiktok,
  faYoutube,
  faDiscord,
  faApple,
  faGoogle,
  faWindows,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const iconArrays = [
  faFutbol,
  faMoon,
  faAnchor,
  faFlask,
  faSun,
  faHandSpock,
  faBug,
  faSnowflake,
  faTurkishLiraSign,
  faCar,
  faGithub,
  faTiktok,
  faYoutube,
  faDiscord,
  faApple,
  faGoogle,
  faWindows,
  faBolt,
  faAndroid,
];

const MemoryGame = () => {
  const { theme, numPlayers, gridSize } = useSelector(
    (state: any) => state.memoryGame
  );
  const [choiceOne, setChoiceOne] = useState<any>(null);
  const [choiceTwo, setChoiceTwo] = useState<any>(null);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    switch (theme) {
      case "Numbers":
        if (gridSize === "4x4") {
          const array = new Array(8).fill(0).map((_, i) => i + 1);
          return [...array, ...array]
            .sort(() => Math.random() - 0.5)
            .map((icon) => ({ icon, id: Math.random(), matched: false }));
        }
        if (gridSize === "6x6") {
          const array = new Array(18).fill(0).map((_, i) => i + 1);
          return [...array, ...array]
            .sort(() => Math.random() - 0.5)
            .map((icon) => ({ icon, id: Math.random(), matched: false }));
        }
      case "Icons":
        if (gridSize === "4x4") {
          const array = iconArrays.slice(0, 8);
          return [...array, ...array]
            .sort(() => Math.random() - 0.5)
            .map((icon) => ({
              icon,
              id: Math.random(),
              matched: false,
            }));
        }
        if (gridSize === "6x6") {
          const array = iconArrays.slice(0, 18);
          return [...array, ...array]
            .sort(() => Math.random() - 0.5)
            .map((icon) => ({
              icon,
              id: Math.random(),
              matched: false,
            }));
        }
    }
  };

  const [array, setArray] = useState<any>(shuffleCards());

  const handleChoice = (choice: any) => {
    choiceOne ? setChoiceTwo(choice) : setChoiceOne(choice);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.icon === choiceTwo.icon) {
        setArray((prevArray: any) => {
          return prevArray.map((card: any) => {
            if (card.icon === choiceOne.icon) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      }
      setTimeout(() => {
        resetTurn();
      }, 1000);
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div>
      <h1 className="text-black">Memory Game</h1>
      <div
        className="grid grid-cols-4 gap-5"
        style={{
          gridTemplateColumns: `repeat(${
            gridSize === "4x4" ? 4 : 6
          }, minmax(0, 1fr))`,
        }}
      >
        {array.map((card: any) => {
          return (
            <GridButton
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo}
              matched={card.matched}
              theme={theme}
              disabled={choiceOne && choiceTwo}
              gridSize={gridSize}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MemoryGame;

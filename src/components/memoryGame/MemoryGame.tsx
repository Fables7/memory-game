"use client";
import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import {
  GridButton,
  CustomButton,
  GameDetails,
  SoloMenu,
  GameFinished,
} from "..";

import { faFutbol, faMoon } from "@fortawesome/free-regular-svg-icons";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [gameActive, setGameActive] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  // shuffle cards
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

  // create players
  const createPlayers = () => {
    const players = new Array(numPlayers).fill(0).map((_, i) => {
      return {
        score: 0,
        id: i,
      };
    });
    return players;
  };

  const [cards, setcards] = useState<any>(shuffleCards());
  const [players, setPlayers] = useState<any>(createPlayers());
  console.log(players);

  const handleChoice = (choice: any) => {
    choiceOne ? setChoiceTwo(choice) : setChoiceOne(choice);
  };

  // handle choice
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.icon === choiceTwo.icon) {
        setcards((prevcards: any) => {
          return prevcards.map((card: any) => {
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

  // handle game finished
  useEffect(() => {
    if (cards.every((card: any) => card.matched)) {
      setGameFinished(true);
    }
  }, [cards]);

  //handle menu opening
  useEffect(() => {
    menuOpen ? setGameActive(false) : setGameActive(true);
  }, [menuOpen]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const restartGame = () => {
    setcards(shuffleCards());
    setTurns(0);
    setSeconds(0);
    setGameFinished(false);
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center mt-5 mb-24">
        <h2 className="text-black">memory</h2>
        <CustomButton primary className=" max-w-[78px] " onClick={openMenu}>
          Menu
        </CustomButton>
      </div>
      {menuOpen && <SoloMenu setOpen={setMenuOpen} restart={restartGame} />}
      {gameFinished && (
        <GameFinished
          setOpen={setGameFinished}
          restart={restartGame}
          timeElapsed={seconds}
          movesTaken={turns}
        />
      )}
      <div
        className="grid grid-cols-4 gap-5"
        style={{
          gridTemplateColumns: `repeat(${
            gridSize === "4x4" ? 4 : 6
          }, minmax(0, 1fr))`,
        }}
      >
        {cards.map((card: any) => {
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
      <GameDetails
        gameActive={gameActive}
        turns={turns}
        seconds={seconds}
        setSeconds={setSeconds}
        gameFinished={gameFinished}
      />
    </div>
  );
};

export default MemoryGame;

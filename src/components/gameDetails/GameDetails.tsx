import { useEffect, useState } from "react";
import useFormatTime from "@/hooks/useFormatTime";
import { useSelector } from "react-redux";

interface GameDetailsProps {
  turns: number;
  gameActive: boolean;
  seconds: number;
  setSeconds: (seconds: number) => void;
  gameFinished?: boolean;
  players?: Player[];
  currentPlayer?: number;
}

interface DetailsContainerProps {
  label: string;
  children: React.ReactNode;
}
interface Player {
  score: number;
  id: number;
}

interface PlayerDetailsContainerProps {
  numPlayers: number;
  players?: Player[];
  currentPlayer?: number;
}

const DetailsContainer = ({ label, children }: DetailsContainerProps) => {
  return (
    <div className="h-[70px] w-[151px] md:w-[255px] bg-[var(--light-gray)] flex flex-col md:flex-row items-center justify-center md:justify-between px-6 box-border rounded-lg text-[1.5rem]">
      <label className="text-[0.938rem]">{label}</label>
      {children}
    </div>
  );
};

const PlayerDetailsContainer = ({
  players,
  currentPlayer,
}: PlayerDetailsContainerProps) => {
  const isTabletOrLarger = window.innerWidth >= 768;
  return (
    <div className="grid grid-flow-col   w-full  gap-6">
      {players?.map((player) => {
        return (
          <div
            className="flex flex-col items-center justify-end"
            key={player.id}
          >
            {currentPlayer === player.id && (
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "13px solid transparent",
                  borderRight: "13px solid transparent",
                  borderBottom: "12px solid var(--orange-accent)",
                }}
              ></div>
            )}
            <div
              style={{
                backgroundColor:
                  currentPlayer === player.id
                    ? "var(--orange-accent)"
                    : "var(--light-gray)",
                color: currentPlayer === player.id ? "var(--white)" : undefined,
              }}
              className="h-[70px] md:h-[80px]  bg-[var(--light-gray)] flex flex-col items-center justify-center md:items-start px-4 rounded-lg w-full"
            >
              <p
                style={{
                  color:
                    currentPlayer === player.id ? "var(--white)" : undefined,
                }}
                className="text-[0.938rem]"
              >
                {isTabletOrLarger ? "Player " : "P"}
                {player.id + 1}
              </p>
              <h3 className="md:text-[1.5rem]">{player.score}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const GameDetails = ({
  turns,
  gameActive,
  setSeconds,
  seconds,
  gameFinished,
  players,
  currentPlayer,
}: GameDetailsProps) => {
  const { numPlayers } = useSelector((state: any) => state.memoryGame);
  useEffect(() => {
    if (numPlayers === 1) {
      let interval: any = null;

      if (gameActive && !gameFinished) {
        interval = setInterval(() => {
          setSeconds(seconds + 1);
        }, 1000);
      } else if (!gameActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [gameActive, gameFinished, seconds, setSeconds, numPlayers]);

  const time = useFormatTime(seconds);

  return (
    <div className="text-black flex justify-center w-full mt-32">
      {numPlayers === 1 ? (
        <div className="flex justify-between w-full md:w-[532px]">
          <DetailsContainer label="Time">{time}</DetailsContainer>
          <DetailsContainer label="Moves">{turns}</DetailsContainer>
        </div>
      ) : (
        <PlayerDetailsContainer
          numPlayers={numPlayers}
          players={players}
          currentPlayer={currentPlayer}
        />
      )}
    </div>
  );
};

export default GameDetails;

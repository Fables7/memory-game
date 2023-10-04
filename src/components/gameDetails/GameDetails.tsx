import { useEffect, useState } from "react";
import useFormatTime from "@/hooks/useFormatTime";
import { useSelector } from "react-redux";

interface GameDetailsProps {
  turns: number;
  gameActive: boolean;
  seconds: number;
  setSeconds: (seconds: number) => void;
  gameFinished?: boolean;
}

interface DetailsContainerProps {
  label: string;
  children: React.ReactNode;
}

interface PlayerDetailsContainerProps {
  numPlayers: number;
}

const DetailsContainer = ({ label, children }: DetailsContainerProps) => {
  return (
    <div className="h-[70px] w-[151px] bg-[var(--light-gray)] flex flex-col items-center justify-center rounded-lg text-[1.5rem]">
      <label className="text-[0.938rem]">{label}</label>
      {children}
    </div>
  );
};

const PlayerDetailsContainer = () => {};

const GameDetails = ({
  turns,
  gameActive,
  setSeconds,
  seconds,
  gameFinished,
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
    <div className="text-black flex justify-between  w-full mt-32">
      {numPlayers === 1 ? (
        <>
          <DetailsContainer label="Time">{time}</DetailsContainer>
          <DetailsContainer label="Moves">{turns}</DetailsContainer>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default GameDetails;

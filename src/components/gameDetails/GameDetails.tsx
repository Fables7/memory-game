import { useEffect, useState } from "react";

interface GameDetailsProps {
  turns: number;
  gameActive: boolean;
  seconds: number;
  setSeconds: (seconds: number) => void;
}

interface DetailsContainerProps {
  label: string;
  children: React.ReactNode;
}

const DetailsContainer = ({ label, children }: DetailsContainerProps) => {
  return (
    <div className="h-[70px] w-[151px] bg-[var(--light-gray)] flex flex-col items-center justify-center rounded-lg text-[1.5rem]">
      <label className="text-[0.938rem]">{label}</label>
      {children}
    </div>
  );
};

const GameDetails = ({
  turns,
  gameActive,
  setSeconds,
  seconds,
}: GameDetailsProps) => {
  useEffect(() => {
    let interval: any = null;

    if (gameActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!gameActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameActive, seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return (
    <div className="text-black flex justify-between  w-full mt-32">
      <DetailsContainer label="Time">
        {formattedMinutes}:{formattedSeconds}
      </DetailsContainer>
      <DetailsContainer label="Moves">{turns}</DetailsContainer>
    </div>
  );
};

export default GameDetails;

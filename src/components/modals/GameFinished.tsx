import { Modal, CustomButton } from "..";
import { newGame } from "../../../store/memoryGame";
import useFormatTime from "@/hooks/useFormatTime";

interface GameFinishedProps {
  setOpen: (open: boolean) => void;
  restart: () => void;
  timeElapsed?: number;
  movesTaken?: number;
}

interface InfoBoxProps {
  label: string;
  timeElapsed?: number;
  pairs?: number;
  turns?: number;
}

const InfoBox = ({ label, timeElapsed, pairs, turns }: InfoBoxProps) => {
  const time = useFormatTime(timeElapsed || 0);
  const handleValue = () => {
    if (timeElapsed) return time;
    if (pairs) return `${pairs} pairs`;
    if (turns) return `${turns} turns`;
    else return null;
  };
  return (
    <div className="h-[48px] bg-[var(--light-gray)] rounded-lg flex items-center px-6 justify-between w-full mb-3">
      <p className="text-[var(--text-gray)] text-[0.813rem]">{label}</p>
      <p className="text-[var(--main-background)] text-[1.25rem]">
        {handleValue()}
      </p>
    </div>
  );
};

const GameFinished = ({
  setOpen,
  restart,
  movesTaken,
  timeElapsed,
}: GameFinishedProps) => {
  return (
    <Modal setOpen={setOpen} className=" items-center h-[376px]">
      <h3 className="text-black">You did it!</h3>
      <p className="text-[0.875rem] mb-8 mt-2">
        {"Game over! Here's how you got on..."}
      </p>
      <InfoBox label="Time Elapsed" timeElapsed={timeElapsed} />
      <InfoBox label="Moves Taken" turns={movesTaken} />
      <CustomButton onClick={restart} className="mt-auto mb-3" primary>
        Restart
      </CustomButton>
      <CustomButton secondary>Setup New Game</CustomButton>
    </Modal>
  );
};

export default GameFinished;

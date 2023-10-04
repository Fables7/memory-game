import { Modal, CustomButton } from "..";
import { newGame } from "../../../store/memoryGame";

interface GameFinishedProps {
  setOpen: (open: boolean) => void;
  restart: () => void;
  timeElapsed?: number;
  movesTaken?: number;
}

interface InfoBoxProps {
  label: string;
  value?: string;
}

const InfoBox = ({ label, value }: InfoBoxProps) => {
  return (
    <div className="h-[48px] bg-[var(--light-gray)] rounded-lg flex items-center px-6 justify-between">
      <p className="text-[var(--text-gray)] text-[0.813rem]">{label}</p>
      <p className="text-[var(--main-background)] text-[1.25rem]">{value}</p>
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
    <Modal setOpen={setOpen}>
      <h3 className="text-black">You did it!</h3>
      <p>{"Game over! Here's how you got on..."}</p>
      <InfoBox label="Time Elapsed" value={"1:53"} />
      <InfoBox label="Moves Taken" value={"39 Moves"} />
      <CustomButton primary>Restart</CustomButton>
      <CustomButton secondary>Setup New Game</CustomButton>
    </Modal>
  );
};

export default GameFinished;

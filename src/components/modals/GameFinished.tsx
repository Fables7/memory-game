import { Modal, CustomButton } from "..";
import { newGame } from "../../../store/memoryGame";

interface GameFinishedProps {
  setOpen: (open: boolean) => void;
  restart: () => void;
}

const GameFinished = ({ setOpen, restart }: GameFinishedProps) => {
  return (
    <Modal setOpen={setOpen}>
      <div>
        <h1>Game finished</h1>
      </div>
    </Modal>
  );
};

export default GameFinished;

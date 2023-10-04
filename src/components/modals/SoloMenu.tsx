import { Modal, CustomButton } from "..";
import { useDispatch } from "react-redux";
import { newGame } from "../../../store/memoryGame";

interface SoloMenuProps {
  setOpen: (open: boolean) => void;
  restart: () => void;
}

const SoloMenu = ({ setOpen, restart }: SoloMenuProps) => {
  const dispatch = useDispatch();
  const newGameHandler = () => {
    dispatch(newGame());
  };
  const restartHandler = () => {
    setOpen(false);
    restart();
  };
  return (
    <Modal setOpen={setOpen} className="h-[224px] justify-around ">
      <CustomButton onClick={restartHandler} primary className="h-[48px]">
        Restart
      </CustomButton>
      <CustomButton
        onClick={newGameHandler}
        secondary
        className="h-[48px] text-[var(--menu-active)]  hover:text-white"
      >
        New Game
      </CustomButton>
      <CustomButton
        onClick={() => setOpen(false)}
        secondary
        className="h-[48px] "
      >
        Resume Game
      </CustomButton>
    </Modal>
  );
};

export default SoloMenu;

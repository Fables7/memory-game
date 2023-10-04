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
    <Modal setOpen={setOpen}>
      <div className="w-[327px] h-[224px] bg-[var(--menu-gray)] rounded-xl flex flex-col justify-around p-5">
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
      </div>
    </Modal>
  );
};

export default SoloMenu;

import { Modal, CustomButton } from "..";

interface SoloMenuProps {
  setOpen: (open: boolean) => void;
}

const SoloMenu = ({ setOpen }: SoloMenuProps) => {
  return (
    <Modal setOpen={setOpen}>
      <div className="w-[327px] h-[224px] bg-[var(--menu-gray)] rounded-xl flex flex-col justify-around p-5">
        <CustomButton className="h-[48px] bg-[var(--orange-accent)] hover:bg-[var(--orange-hover)]">
          Restart
        </CustomButton>
        <CustomButton className="h-[48px] text-[var(--active)] bg-[var(--light-gray)] hover:text-white">
          New Game
        </CustomButton>
        <CustomButton className="h-[48px] text-[var(--active)] bg-[var(--light-gray)]  hover:text-white">
          Resume Game
        </CustomButton>
      </div>
    </Modal>
  );
};

export default SoloMenu;

import { useState } from "react";

const StartGameForm = () => {
  return (
    <div className=" min-w-[327px] h-[386px] bg-[var(--white)] rounded-lg p-5 ">
      <form className="flex flex-col">
        <label>Select Theme</label>
        <label>Number of Players</label>
        <label>Grid Size</label>
        <button>Start Game</button>
      </form>
    </div>
  );
};

export default StartGameForm;

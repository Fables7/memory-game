import { Modal, CustomButton } from "..";
import { newGame } from "../../../store/memoryGame";
import useFormatTime from "@/hooks/useFormatTime";
import { useSelector, useDispatch } from "react-redux";

interface GameFinishedProps {
  setOpen: (open: boolean) => void;
  restart: () => void;
  timeElapsed?: number;
  movesTaken?: number;
  players: any[];
}

interface InfoBoxProps {
  label: string;
  timeElapsed?: number;
  pairs?: number;
  turns?: number;
  winner?: boolean;
}

const InfoBox = ({
  label,
  timeElapsed,
  pairs,
  turns,
  winner,
}: InfoBoxProps) => {
  const time = useFormatTime(timeElapsed || 0);
  const handleValue = () => {
    if (timeElapsed) return time;
    if (pairs) return `${pairs} Pairs`;
    if (turns) return `${turns} turns`;
    else return null;
  };
  return (
    <div
      style={{ background: winner ? "var(--main-background)" : undefined }}
      className="h-[48px] bg-[var(--light-gray)] rounded-lg flex items-center px-6 justify-between w-full mb-3"
    >
      <p
        style={{ color: winner ? "white" : undefined }}
        className="text-[var(--text-gray)] text-[0.813rem]"
      >
        {label}
      </p>
      <p
        style={{ color: winner ? "white" : undefined }}
        className="text-[var(--main-background)] text-[1.25rem]"
      >
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
  players,
}: GameFinishedProps) => {
  const { numPlayers } = useSelector((state: any) => state.memoryGame);
  const dispatch = useDispatch();

  const checkWinner = () => {
    const winningScore = Math.max(...players.map((player) => player.score));
    const winners = players.filter((player) => player.score === winningScore);

    winners.forEach((player) => {
      player.winner = true;
    });

    players.sort((a, b) => b.score - a.score);
    console.log(winners);
    return [winners, players];
  };

  const [winners, sortedPlayers] = checkWinner();

  const displayTitle = () => {
    if (numPlayers > 1) {
      if (winners.length === 1) {
        return `Player ${winners[0].id + 1} Wins!`;
      } else {
        return "It's a tie!";
      }
    } else {
      return "Game over! Here's how you got on...";
    }
  };

  return (
    <Modal setOpen={setOpen} className=" items-center h-[376px]">
      <h3 className="text-black">{displayTitle()}</h3>
      <p className="text-[0.875rem] mb-8 mt-2">
        {"Game over! Here's how you got on..."}
      </p>
      {numPlayers > 1 ? (
        <>
          {sortedPlayers.map((player, index) => {
            return (
              <InfoBox
                key={index}
                label={`Player ${player.id + 1}`}
                pairs={player.score}
                winner={player.winner}
              />
            );
          })}
        </>
      ) : (
        <>
          <InfoBox label="Time Elapsed" timeElapsed={timeElapsed} />
          <InfoBox label="Moves Taken" turns={movesTaken} />
        </>
      )}
      <CustomButton onClick={restart} className="mt-auto mb-3" primary>
        Restart
      </CustomButton>
      <CustomButton onClick={() => dispatch(newGame())} secondary>
        Setup New Game
      </CustomButton>
    </Modal>
  );
};

export default GameFinished;

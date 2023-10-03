"use client";
import { StartGameForm, MemoryGame } from "@/components";
import { useSelector } from "react-redux";

export default function Home() {
  const { gameStarted } = useSelector((state: any) => state.memoryGame);
  return (
    <main
      style={{
        background: gameStarted ? "var(--white)" : "var(--main-background)",
      }}
      className="flex min-h-screen flex-col items-center "
    >
      {!gameStarted ? <StartGameForm /> : <MemoryGame />}
    </main>
  );
}

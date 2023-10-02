"use client";
import { StartGameForm } from "@/components";
import { useSelector } from "react-redux";

export default function Home() {
  const { gameStarted } = useSelector((state: any) => state.memoryGame);
  return (
    <main className="flex min-h-screen flex-col items-center pt-24  bg-[var(--main-background)]">
      <h1 className="text-white mb-12">memory</h1>
      {!gameStarted ? <StartGameForm /> : <h1>hello </h1>}
    </main>
  );
}

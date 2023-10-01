"use client";
import { useState } from "react";
import { StartGameForm } from "@/components";

export default function Home() {
  const [startGame, setStartGame] = useState(false);
  const [theme, setTheme] = useState("");
  const [numPlayers, setNumPlayers] = useState(1);
  const [gridSize, setGridSize] = useState(4);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[var(--main-background)]">
      <h1 className="text-white">memory</h1>
      <StartGameForm />
    </main>
  );
}

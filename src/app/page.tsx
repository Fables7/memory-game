"use client";
import { StartGameForm } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24  bg-[var(--main-background)]">
      <h1 className="text-white mb-12">memory</h1>
      <StartGameForm />
    </main>
  );
}

"use client";
import { useGames } from "@/hooks/useGames";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div className="m-6 flex gap-6 items-center overflow-x-scroll w-full h-screen scroll-smooth">
      {error && <p className="text-black">{error}</p>}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

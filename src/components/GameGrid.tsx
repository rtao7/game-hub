"use client";
import { useGames } from "@/hooks/useGames";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div className="columns-3 m-6 gap-6">
      {error && <p className="text-black">{error}</p>}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

"use client";
import { useGames } from "@/hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";

export const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <div className="columns-3 m-6 gap-6">
      {error && <p className="text-black">{error}</p>}
      {isLoading && <GameCardSkeleton />}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

"use client";
import { useGames } from "@/hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";

export const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <div className="columns-3 m-6 gap-6">
      {error && <p className="text-black">{error}</p>}
      {isLoading && skeletons.map((e) => <GameCardSkeleton key={e} />)}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

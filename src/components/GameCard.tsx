import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { useGames, Game } from "@/hooks/useGames";
import { CriticScore } from "./CriticScore";

interface GameCardProp {
  game: Game;
}

export const GameCard = ({ game }: GameCardProp) => {
  return (
    <div>
      <Card className="gap-2 w-96 h-fit text-black rounded-sm p-0 overflow-hidden">
        <CardContent className="p-0">
          <img src={game.background_image} alt={game.name} className="h-64" />
        </CardContent>
        <CardHeader className="px-3">{game.name}</CardHeader>
        <CardFooter>
          <CriticScore score={game.metacritic} />
        </CardFooter>
      </Card>
    </div>
  );
};

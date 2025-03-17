import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useGames, Game } from "@/hooks/useGames";

interface GameCardProp {
  game: Game;
}

export const GameCard = ({ game }: GameCardProp) => {
  return (
    <div>
      <Card className="w-[320px] h-[540px] rounded-sm p-0 overflow-clip">
        <img
          src={game.background_image}
          alt={game.name}
          className="h-full bg-black object-cover"
        />
      </Card>
    </div>
  );
};

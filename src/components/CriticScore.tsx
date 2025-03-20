"use client";
import { Badge } from "./ui/badge";

interface CriticScoreProp {
  score: number;
}

export const CriticScore = ({ score }: CriticScoreProp) => {
  let color =
    score > 80 ? "bg-green-600" : score > 60 ? "bg-yellow-600" : "bg-red-600";

  return <Badge className={`${color} text-xl`}>{score}</Badge>;
};

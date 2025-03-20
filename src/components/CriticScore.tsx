import { Badge } from "./ui/badge";

interface CriticScoreProp {
  score: number;
}

export const CriticScore = ({ score }: CriticScoreProp) => {
  return (
    <>
      <Badge>{score}</Badge>
    </>
  );
};

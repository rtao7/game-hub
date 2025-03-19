import { GameGrid } from "@/components/GameGrid";
import GenreList from "@/components/GenreList";
import NavBar from "@/components/NavBar";

export default function page() {
  return (
    <div className="text-white flex flex-col h-screen">
      <NavBar></NavBar>
      <div className="flex">
        <GenreList></GenreList>
        <GameGrid></GameGrid>
      </div>
    </div>
  );
}

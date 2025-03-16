import { GameGrid } from "@/components/GameGrid";
import NavBar from "@/components/NavBar";

export default function page() {
  return (
    <div className="text-white flex flex-col h-screen">
      <NavBar></NavBar>
      <div className="bg-neutral-600 flex-1">
        <GameGrid></GameGrid>
      </div>
    </div>
  );
}

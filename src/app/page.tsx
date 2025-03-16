import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white flex flex-col h-screen">
      <NavBar></NavBar>
      <div className="bg-neutral-600 flex-1">Conten</div>
    </div>
  );
}

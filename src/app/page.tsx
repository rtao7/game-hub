import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white flex flex-col h-screen">
      <div className="bg-neutral-800">Header</div>
      <div className="bg-neutral-600 flex-1">Conten</div>
    </div>
  );
}

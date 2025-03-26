import { Skeleton } from "./ui/skeleton";

export const GameCardSkeleton = () => {
  return (
    <div className="gap-2 w-96 h-96 text-black rounded-sm p-0 overflow-hidden border">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

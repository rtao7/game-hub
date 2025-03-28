import { Skeleton } from "./ui/skeleton";

export const GameCardSkeleton = () => {
  return (
    <div className="gap-2 w-96 h-96 text-black rounded-sm p-0 overflow-hidden border">
      <Skeleton className="h-fit w-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

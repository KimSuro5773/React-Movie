import { Skeleton } from "@/components/ui";

function MovieCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border shadow-sm">
      <Skeleton className="aspect-3/4 w-full" />
      <div className="flex flex-col gap-2 p-2 min-h-15">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2 mt-auto" />
      </div>
    </div>
  );
}

export { MovieCardSkeleton };

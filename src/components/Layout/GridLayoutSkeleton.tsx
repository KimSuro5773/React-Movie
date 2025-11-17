import { MovieCardSkeleton } from "../movie";
import { Skeleton } from "../ui";

function GridLayoutSkeleton() {
  return (
    <div className="container mx-auto space-y-8 py-8">
      <div className="px-4">
        <Skeleton className="h-8 w-40 md:h-10 md:w-56 lg:h-12 lg:w-72" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 px-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

export { GridLayoutSkeleton };

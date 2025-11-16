import { Skeleton } from "@/components/ui/skeleton";
import { Carousel, CarouselContent, CarouselItem } from "../ui";
import { MovieCardSkeleton } from "./MovieCardSkeleton";

function MovieSectionSkeleton() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between px-12">
        <Skeleton className="h-6 w-32 md:h-7 md:w-40 lg:h-8 lg:w-48" />

        <Skeleton className="h-4 w-16 md:h-5 md:w-20" />
      </div>

      <div className="px-12">
        <Carousel opts={{ align: "start" }}>
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/6">
                <MovieCardSkeleton />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export { MovieSectionSkeleton };

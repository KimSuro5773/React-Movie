import { MovieDetailHeroSkeleton } from "@/features/movies/components/MovieDetailHero/MovieDetailHeroSkeleton";
import { MovieTrailerSkeleton } from "@/features/movies/components/MovieTrailer/MovieTrailerSkeleton";
import { MovieSectionSkeleton } from "@/features/movies/components/MovieSection/MovieSectionSkeleton";

function MovieDetailSkeleton() {
  return (
    <div className="min-h-screen">
      <MovieDetailHeroSkeleton />
      <MovieTrailerSkeleton />
      <MovieSectionSkeleton />
      <MovieSectionSkeleton />
    </div>
  );
}

export { MovieDetailSkeleton };

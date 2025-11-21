import type { MovieDetailResponse } from "@features/movies/types/movie";
import { getBackdropUrl } from "@features/movies/utils";
import { MoviePosterSection } from "./MoviePosterSection";
import { MovieInfoSection } from "./MovieInfoSection";

interface MovieDetailHeroProps {
  movie: MovieDetailResponse;
}

function MovieDetailHero({ movie }: MovieDetailHeroProps) {
  const backdropUrl = getBackdropUrl(movie.backdrop_path, "LARGE");

  return (
    <section className="relative">
      {backdropUrl && (
        <div className="absolute inset-0 -z-10">
          <img
            src={backdropUrl}
            alt={`${movie.title} 이미지`}
            className="w-full h-full object-cover blur-xl opacity-40"
          />
        </div>
      )}

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <MoviePosterSection poster_path={movie.poster_path} title={movie.title} />
          <MovieInfoSection movie={movie} />
        </div>
      </div>
    </section>
  );
}

export { MovieDetailHero };

import type { MovieDetailResponse } from "@features/movies/types/movie";
import { Star, ExternalLink } from "lucide-react";
import { formatVoteAverage, formatRuntime } from "@features/movies/utils";
import { Button } from "@/components/ui";

interface MovieInfoSectionProps {
  movie: MovieDetailResponse;
}

function MovieInfoSection({ movie }: MovieInfoSectionProps) {
  return (
    <div className="flex-1 space-y-4">
      <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>

      <div className="flex items-center gap-2">
        <Star className="size-5 fill-yellow-400 text-yellow-400" />
        <span className="text-xl font-semibold">{formatVoteAverage(movie.vote_average)}</span>
        <span className="text-muted-foreground">({movie.vote_count.toLocaleString()} 평가)</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {movie.genres.map((genre) => (
          <span
            key={genre.id}
            className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-sm font-medium text-secondary-foreground"
          >
            {genre.name}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>{movie.release_date}</span>
        <span>{formatRuntime(movie.runtime)}</span>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">영화 줄거리</h2>
        <p className="text-muted-foreground leading-relaxed">
          {movie.overview || "No overview available."}
        </p>
      </div>

      {movie.homepage && (
        <Button asChild>
          <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="size-4" />
            영화 보러가기
          </a>
        </Button>
      )}
    </div>
  );
}

export { MovieInfoSection };

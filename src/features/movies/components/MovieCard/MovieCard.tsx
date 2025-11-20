import { Card, CardContent } from "@/components/ui";
import { Star } from "lucide-react";
import type { MovieListItem } from "@/features/movies/types/movie";
import { formatVoteAverage } from "@features/movies/utils";
import { MoviePoster } from "../MoviePoster/MoviePoster";
import { Link } from "react-router-dom";

type MovieCardProps = Pick<
  MovieListItem,
  "id" | "title" | "vote_average" | "poster_path" | "release_date"
>;

function MovieCard({ id, title, vote_average, poster_path, release_date }: MovieCardProps) {
  return (
    <Link to={`/movie/${id}`}>
      <Card className="group overflow-hidden border shadow-sm transition-all hover:shadow-lg cursor-pointer py-0">
        <div className="relative aspect-3/4 overflow-hidden">
          <MoviePoster title={title} poster_path={poster_path} />

          <div className="absolute top-1 right-1 md:top-2 md:right-2 rounded-md bg-black/60 px-1.5 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs text-white flex items-center gap-1 md:gap-1.5">
            <Star color="yellow" className="size-3 md:size-4" fill="yellow" />
            <span className="font-semibold">{formatVoteAverage(vote_average)}</span>
          </div>
        </div>

        <CardContent className="p-2 flex flex-col min-h-15">
          <h3 className="line-clamp-1 text-sm font-medium leading-tight">{title}</h3>
          <p className="mt-auto text-xs text-muted-foreground">{release_date}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export { MovieCard };

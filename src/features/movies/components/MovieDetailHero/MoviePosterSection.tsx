import { MoviePoster } from "../MoviePoster/MoviePoster";

interface MoviePosterSectionProps {
  poster_path: string | null;
  title: string;
}

function MoviePosterSection({ poster_path, title }: MoviePosterSectionProps) {
  return (
    <div className="shrink-0 w-full md:w-80">
      <MoviePoster
        poster_path={poster_path}
        title={title}
        size="LARGE"
        className="rounded-lg shadow-2xl aspect-2/3"
      />
    </div>
  );
}

export { MoviePosterSection };

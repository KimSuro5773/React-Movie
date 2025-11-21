import type { Videos } from "@features/movies/types/movie";
import { getYouTubeTrailers, getYouTubeUrl } from "@features/movies/utils";

interface MovieTrailerProps {
  videos?: Videos;
  title: string;
}

function MovieTrailer({ videos, title }: MovieTrailerProps) {
  const trailers = getYouTubeTrailers(videos);

  if (trailers.length === 0) return null;

  const mainTrailer = trailers[0];
  const trailerUrl = getYouTubeUrl(mainTrailer.key);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={trailerUrl}
            title={`${title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export { MovieTrailer };

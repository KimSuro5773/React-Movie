import { useMovieSimilar } from "@/features/movies/hooks/useMovies";
import { MovieSectionSkeleton } from "../MovieSection/MovieSectionSkeleton";
import { MovieCarousel } from "../MovieCarousel/MovieCarousel";

interface MovieSimilarProps {
  movieId: number;
}

function MovieSimilar({ movieId }: MovieSimilarProps) {
  const { data, isLoading } = useMovieSimilar(movieId);

  if (isLoading) return <MovieSectionSkeleton />;
  if (!data || data.results.length === 0) return null;

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 px-12">비슷한 영화</h2>
      <MovieCarousel movies={data.results} />
    </section>
  );
}

export { MovieSimilar };

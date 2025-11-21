import { useMovieRecommendations } from "@/features/movies/hooks/useMovies";
import { MovieCarousel } from "../MovieCarousel/MovieCarousel";

interface MovieRecommendationsProps {
  movieId: number;
}

function MovieRecommendations({ movieId }: MovieRecommendationsProps) {
  const { data, isLoading } = useMovieRecommendations(movieId);

  if (isLoading) return <div>로딩 중...</div>;
  if (!data || data.results.length === 0) return null;

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 px-12">추천 영화</h2>
      <MovieCarousel movies={data.results} />
    </section>
  );
}

export { MovieRecommendations };

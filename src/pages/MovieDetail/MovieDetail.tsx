import { MovieDetailHero, MovieTrailer } from "@/features/movies/components";
import { useMovieDetail } from "@/features/movies/hooks/useMovies";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const movieId = Number(id);

  const { data: movie, isLoading } = useMovieDetail(movieId);

  if (isLoading) return <div>로딩중</div>;
  if (!movie) return <div>영화를 찾을 수 없습니다.</div>;

  return (
    <div className="min-h-screen">
      <MovieDetailHero movie={movie} />
      <MovieTrailer videos={movie.videos} title={movie.title} />
    </div>
  );
}

export { MovieDetail };

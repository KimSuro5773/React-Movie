import { MovieSection } from "@/components/movie";
import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "@/hooks/useMovies";
import { PATHS } from "@/routes/paths";

function Home() {
  const { data: nowPlaying } = useNowPlayingMovies(1);
  const { data: popular } = usePopularMovies(1);
  const { data: topRated } = useTopRatedMovies(1);
  const { data: upcoming } = useUpcomingMovies(1);

  return (
    <div className="container mx-auto space-y-12 py-8">
      {nowPlaying && (
        <MovieSection
          titleHeader="현재 상영중"
          linkPath={PATHS.NOW_PLAYING}
          movies={nowPlaying.results}
        />
      )}

      {popular && (
        <MovieSection titleHeader="TMDB 인기" linkPath={PATHS.POPULAR} movies={popular.results} />
      )}

      {topRated && (
        <MovieSection
          titleHeader="최고 평점"
          linkPath={PATHS.TOP_RATED}
          movies={topRated.results}
        />
      )}

      {upcoming && (
        <MovieSection titleHeader="개봉 예정" linkPath={PATHS.UPCOMING} movies={upcoming.results} />
      )}
    </div>
  );
}

export { Home };

import { MovieSection, MovieSectionSkeleton } from "@/components/movie";
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
      {/* 현재 상영중 */}
      {!nowPlaying ? (
        <MovieSectionSkeleton />
      ) : (
        <MovieSection
          titleHeader="현재 상영중"
          linkPath={PATHS.NOW_PLAYING}
          movies={nowPlaying.results}
        />
      )}

      {/* TMDB 인기 */}
      {!popular ? (
        <MovieSectionSkeleton />
      ) : (
        <MovieSection titleHeader="TMDB 인기" linkPath={PATHS.POPULAR} movies={popular.results} />
      )}

      {/* 최고 평점 */}
      {!topRated ? (
        <MovieSectionSkeleton />
      ) : (
        <MovieSection
          titleHeader="최고 평점"
          linkPath={PATHS.TOP_RATED}
          movies={topRated.results}
        />
      )}

      {/* 개봉 예정 */}
      {!upcoming ? (
        <MovieSectionSkeleton />
      ) : (
        <MovieSection titleHeader="개봉 예정" linkPath={PATHS.UPCOMING} movies={upcoming.results} />
      )}
    </div>
  );
}

export { Home };

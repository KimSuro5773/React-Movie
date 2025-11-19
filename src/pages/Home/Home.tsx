import { MovieSection, MovieSectionSkeleton } from "@/features/movies/components";
import { TMDB_MOVIE_SECTION_TITLE } from "@/features/movies/constants/tmdb";
import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "@/features/movies/hooks/useMovies";
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
          titleHeader={TMDB_MOVIE_SECTION_TITLE.NOWPLAYING}
          linkPath={PATHS.NOW_PLAYING}
          movies={nowPlaying.results}
        />
      )}

      {/* TMDB 인기 */}
      {!popular ? (
        <MovieSectionSkeleton />
      ) : (
        <MovieSection
          titleHeader={TMDB_MOVIE_SECTION_TITLE.POPULAR}
          linkPath={PATHS.POPULAR}
          movies={popular.results}
        />
      )}

      {/* 최고 평점 */}
      {!topRated ? (
        <MovieSectionSkeleton />
      ) : (
        <MovieSection
          titleHeader={TMDB_MOVIE_SECTION_TITLE.TOPRATED}
          linkPath={PATHS.TOP_RATED}
          movies={topRated.results}
        />
      )}

      {/* 개봉 예정 */}
      {!upcoming ? (
        <MovieSectionSkeleton />
      ) : (
        <MovieSection
          titleHeader={TMDB_MOVIE_SECTION_TITLE.UPCOMING}
          linkPath={PATHS.UPCOMING}
          movies={upcoming.results}
        />
      )}
    </div>
  );
}

export { Home };

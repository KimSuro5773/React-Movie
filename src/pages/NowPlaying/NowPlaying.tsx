import { GridLayout, GridLayoutSkeleton } from "@/components/layout";
import { TMDB_MOVIE_SECTION_TITLE } from "@/features/movies/constants/tmdb";
import { useNowPlayingMovies } from "@/features/movies/hooks/useMovies";
import { useState } from "react";

function NowPlaying() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useNowPlayingMovies(page);

  if (isLoading) {
    return <GridLayoutSkeleton />;
  }

  if (!data) return null;

  return (
    <GridLayout title={TMDB_MOVIE_SECTION_TITLE.NOWPLAYING} data={data} onPageChange={setPage} />
  );
}

export { NowPlaying };

import { GridLayout, GridLayoutSkeleton } from "@/components/layout";
import { TMDB_MOVIE_SECTION_TITLE } from "@/features/movies/constants/tmdb";
import { useTopRatedMovies } from "@/features/movies/hooks/useMovies";
import { useState } from "react";

function TopRated() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useTopRatedMovies(page);

  if (isLoading) {
    return <GridLayoutSkeleton />;
  }

  if (!data) return null;

  return (
    <GridLayout title={TMDB_MOVIE_SECTION_TITLE.TOPRATED} data={data} onPageChange={setPage} />
  );
}

export { TopRated };

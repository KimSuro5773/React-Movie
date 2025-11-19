import { GridLayout, GridLayoutSkeleton } from "@/components/layout";
import { TMDB_MOVIE_SECTION_TITLE } from "@/features/movies/constants/tmdb";
import { usePopularMovies } from "@/features/movies/hooks/useMovies";
import { useState } from "react";

function Popular() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = usePopularMovies(page);

  console.log(data);

  if (isLoading) {
    return <GridLayoutSkeleton />;
  }

  if (!data) return null;

  return <GridLayout title={TMDB_MOVIE_SECTION_TITLE.POPULAR} data={data} onPageChange={setPage} />;
}

export { Popular };

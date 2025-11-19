import { GridLayout, GridLayoutSkeleton } from "@/components/layout";
import { TMDB_MOVIE_SECTION_TITLE } from "@/features/movies/constants/tmdb";
import { useUpcomingMovies } from "@/features/movies/hooks/useMovies";
import { useState } from "react";

function Upcoming() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useUpcomingMovies(page);

  if (isLoading) {
    return <GridLayoutSkeleton />;
  }

  if (!data) return null;

  return (
    <GridLayout title={TMDB_MOVIE_SECTION_TITLE.UPCOMING} data={data} onPageChange={setPage} />
  );
}

export { Upcoming };

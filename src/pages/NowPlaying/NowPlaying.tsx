import { GridLayout, GridLayoutSkeleton } from "@/components/layout";
import { useNowPlayingMovies } from "@/features/movies/hooks/useMovies";
import { useState } from "react";

function NowPlaying() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useNowPlayingMovies(page);

  if (isLoading) {
    return <GridLayoutSkeleton />;
  }

  if (!data) return null;

  return <GridLayout title="현재 상영중" data={data} onPageChange={setPage} />;
}

export { NowPlaying };

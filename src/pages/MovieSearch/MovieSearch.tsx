import { GridLayout, GridLayoutSkeleton } from "@/components/layout";
import { useSearchMovies } from "@/features/movies/hooks/useMovies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieSearch() {
  const { query } = useParams<{ query: string }>();
  const [page, setPage] = useState(1);
  const decodedQuery = decodeURIComponent(query || "");
  const { data, isLoading } = useSearchMovies(decodedQuery, page);

  useEffect(() => {
    setPage(1);
  }, [query]);

  if (isLoading) return <GridLayoutSkeleton />;

  if (!data) return null;

  return <GridLayout title={`"${decodedQuery}" 검색 결과`} data={data} onPageChange={setPage} />;
}

export { MovieSearch };

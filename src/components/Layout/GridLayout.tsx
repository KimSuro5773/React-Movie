import type { MovieListResponse } from "@/types/movie";
import { MovieCard } from "../movie";
import { AppPagination } from "../common";

interface GridLayoutProps {
  title: string;
  data: MovieListResponse;
  onPageChange: (page: number) => void;
}

function GridLayout({ title, data, onPageChange }: GridLayoutProps) {
  return (
    <div className="container mx-auto space-y-8 py-8">
      <div className="px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 px-4">
        {data.results.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            vote_average={movie.vote_average}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>

      <AppPagination
        currentPage={data.page}
        totalPages={data.total_pages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export { GridLayout };

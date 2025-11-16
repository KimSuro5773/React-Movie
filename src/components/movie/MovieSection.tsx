import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MovieCarousel } from "./MovieCarousel";
import type { MovieListItem } from "@/types/movie";

interface MovieSectionProps {
  titleHeader: string;
  linkPath: string;
  movies: MovieListItem[];
}

function MovieSection({ titleHeader, linkPath, movies }: MovieSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between px-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{titleHeader}</h2>
        <Link to={linkPath} className="flex items-center gap-2 text-sm md:text-base">
          전체보기 <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </Link>
      </div>

      <MovieCarousel movies={movies} />
    </section>
  );
}

export { MovieSection };

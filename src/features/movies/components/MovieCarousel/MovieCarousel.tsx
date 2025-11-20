import type { MovieListItem } from "@/features/movies/types/movie";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { MovieCard } from "../MovieCard/MovieCard";

interface MovieCarouselProps {
  movies: MovieListItem[];
}

function MovieCarousel({ movies }: MovieCarouselProps) {
  return (
    <div className="px-12">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem key={movie.id} className="basis-1/2 md:basis-1/4 lg:basis-1/6">
              <MovieCard
                id={movie.id}
                title={movie.title}
                vote_average={movie.vote_average}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export { MovieCarousel };

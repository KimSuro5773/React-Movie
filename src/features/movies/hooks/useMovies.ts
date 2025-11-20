import {
  getNowPlayingMovies,
  getPopularMovies,
  getSearchMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/features/movies/api/movieApi";
import { QUERY_KEYS } from "@/features/movies/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useNowPlayingMovies = (page = 1) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.MOVIES.NOW_PLAYING, page],
    queryFn: () => getNowPlayingMovies(page),
  });
};

export const usePopularMovies = (page = 1) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.MOVIES.POPULAR, page],
    queryFn: () => getPopularMovies(page),
  });
};

export const useTopRatedMovies = (page = 1) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.MOVIES.TOP_RATED, page],
    queryFn: () => getTopRatedMovies(page),
  });
};

export const useUpcomingMovies = (page = 1) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.MOVIES.UPCOMING, page],
    queryFn: () => getUpcomingMovies(page),
  });
};

export const useSearchMovies = (query: string, page = 1) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.MOVIES.SEARCH, query, page],
    queryFn: () => getSearchMovies(query),
  });
};

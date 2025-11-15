import type { MovieListResponse } from "@/types/movie";
import { END_POINTS } from "./endpoints";
import { tmdbClient } from "./tmdb";

export const getNowPlayingMovies = async (page = 1): Promise<MovieListResponse> => {
  const { data } = await tmdbClient.get(END_POINTS.MOVIES.NOW_PLAYING, {
    params: { page },
  });
  return data;
};

export const getPopularMovies = async (page = 1): Promise<MovieListResponse> => {
  const { data } = await tmdbClient.get(END_POINTS.MOVIES.POPULAR, {
    params: { page },
  });
  return data;
};

export const getTopRatedMovies = async (page = 1): Promise<MovieListResponse> => {
  const { data } = await tmdbClient.get(END_POINTS.MOVIES.TOP_RATED, {
    params: { page },
  });
  return data;
};

export const getUpcommingMovies = async (page = 1): Promise<MovieListResponse> => {
  const { data } = await tmdbClient.get(END_POINTS.MOVIES.UPCOMING, {
    params: { page },
  });
  return data;
};

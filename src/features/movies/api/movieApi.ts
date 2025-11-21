import type { MovieDetailResponse, MovieListResponse } from "@/features/movies/types/movie";
import { END_POINTS } from "./endpoints";
import { client } from "@/lib/api/client";

export const getNowPlayingMovies = async (page = 1): Promise<MovieListResponse> => {
  const { data } = await client.get(END_POINTS.MOVIES.NOW_PLAYING, {
    params: { page },
  });
  return data;
};

export const getPopularMovies = async (page = 1): Promise<MovieListResponse> => {
  const { data } = await client.get(END_POINTS.MOVIES.POPULAR, {
    params: { page },
  });
  return data;
};

export const getTopRatedMovies = async (page = 1): Promise<MovieListResponse> => {
  const { data } = await client.get(END_POINTS.MOVIES.TOP_RATED, {
    params: { page },
  });
  return data;
};

export const getUpcomingMovies = async (page = 1): Promise<MovieListResponse> => {
  const { data } = await client.get(END_POINTS.MOVIES.UPCOMING, {
    params: { page },
  });
  return data;
};

export const getSearchMovies = async (query: string, page = 1): Promise<MovieListResponse> => {
  const { data } = await client.get(END_POINTS.MOVIES.SEARCH, {
    params: { query, page },
  });

  return data;
};

export const getMovieDetail = async (movie_id: number): Promise<MovieDetailResponse> => {
  const { data } = await client.get(END_POINTS.MOVIE_DETAIL(movie_id), {
    params: { append_to_response: "videos" },
  });

  return data;
};

export const getMovieRecommendations = async (
  movie_id: number,
  page = 1,
): Promise<MovieListResponse> => {
  const { data } = await client.get(END_POINTS.MOVIE_RECOMMENDATIONS(movie_id), {
    params: { page },
  });

  return data;
};

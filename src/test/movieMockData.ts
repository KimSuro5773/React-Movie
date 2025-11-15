import type { MovieListItem, MovieListResponse } from "@/types/movie";

export const mockMovieItem: MovieListItem = {
  id: 1,
  title: "테스트 영화",
  adult: false,
  backdrop_path: "/backdrop.jpg",
  genre_ids: [28, 12],
  original_language: "en",
  original_title: "Test Movie",
  overview: "테스트 영화입니다",
  popularity: 100,
  poster_path: "/poster.jpg",
  release_date: "2024-01-01",
  video: false,
  vote_average: 8.5,
  vote_count: 1000,
};

export const mockMovieListResponse: MovieListResponse = {
  page: 1,
  results: [mockMovieItem],
  total_pages: 10,
  total_results: 200,
};

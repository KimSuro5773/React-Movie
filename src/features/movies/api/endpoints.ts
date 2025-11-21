export const END_POINTS = {
  MOVIES: {
    NOW_PLAYING: "/movie/now_playing",
    POPULAR: "/movie/popular",
    TOP_RATED: "/movie/top_rated",
    UPCOMING: "/movie/upcoming",
    SEARCH: "/search/movie",
  },

  MOVIE_DETAIL: (movieId: number) => `/movie/${movieId}`,
  MOVIE_RECOMMENDATIONS: (movieId: number) => `/movie/${movieId}/recommendations`,
} as const;

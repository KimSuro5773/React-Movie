export const END_POINTS = {
  MOVIES: {
    NOW_PLAYING: "/movie/now_playing",
    POPULAR: "/movie/popular",
    TOP_RATED: "/movie/top_rated",
    UPCOMING: "/movie/upcoming",
  },

  MOVIE_SEARCH: (query: string) => `/movie/${query}`,
  MOVIE_DETAIL: (movieId: number) => `/movie/${movieId}`,
} as const;

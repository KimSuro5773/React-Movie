export const API_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p",

  POSTER_SIZES: {
    SMALL: "w342",
    MEDIUM: "w500",
    LARGE: "w780",
    ORIGINAL: "original",
  },

  BACKDROP_SIZES: {
    SMALL: "w300",
    MEDIUM: "w780",
    LARGE: "w1280",
    ORIGINAL: "original",
  },
} as const;

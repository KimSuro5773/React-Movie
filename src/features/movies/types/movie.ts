export interface MovieListResponse {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieListItem[];
  total_pages: number;
  total_results: number;
}

export interface MovieListItem {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetailResponse {
  backdrop_path: string | null;
  genres: GenresItem[];
  homepage: string | null;
  id: number;
  overview: string;
  poster_path: string | null;
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
  vote_count: number;
  videos?: Videos;
}

export interface GenresItem {
  id: number;
  name: string;
}

export interface Videos {
  results: VideosItem[];
}

export interface VideosItem {
  key: string;
  site: string;
  type: string;
}

import { tmdbClient } from "./tmdb";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "./movieApi";
import { END_POINTS } from "./endpoints";
import { mockMovieListResponse } from "@/test/movieMockData";
import type { MovieListResponse } from "@/types/movie";

vi.mock("./tmdb", () => ({
  tmdbClient: {
    get: vi.fn(),
  },
}));

describe("movieApi TEST", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // API 함수 테스트를 위한 핼퍼 함수
  const testMovieApi = async (
    apiFn: (page?: number) => Promise<MovieListResponse>,
    endpoint: string,
    page: number,
  ) => {
    vi.mocked(tmdbClient.get).mockResolvedValue({ data: mockMovieListResponse });

    const result = await apiFn(page);

    expect(tmdbClient.get).toHaveBeenCalledWith(endpoint, {
      params: { page },
    });

    expect(result).toStrictEqual(mockMovieListResponse);
  };

  describe("getNowPlayingMovies TEST", () => {
    test("getNowPlayingMovies는 현재 상영중인 영화 목록 데이터를 반환한다.", async () => {
      await testMovieApi(getNowPlayingMovies, END_POINTS.MOVIES.NOW_PLAYING, 1);
    });

    test("page에 2를 전달하면 page=2에 해당되는 영화 목록을 반환한다.", async () => {
      await testMovieApi(getNowPlayingMovies, END_POINTS.MOVIES.NOW_PLAYING, 2);
    });
  });

  describe("getPopularMovies TEST", () => {
    test("getPopularMovies는 인기 영화 목록 데이터를 반환한다.", async () => {
      await testMovieApi(getPopularMovies, END_POINTS.MOVIES.POPULAR, 1);
    });

    test("page에 2를 전달하면 page=2에 해당되는 영화 목록을 반환한다.", async () => {
      await testMovieApi(getPopularMovies, END_POINTS.MOVIES.POPULAR, 2);
    });
  });

  describe("getTopRatedMovies TEST", () => {
    test("getTopRatedMovies는 최고 평점 영화 목록 데이터를 반환한다.", async () => {
      await testMovieApi(getTopRatedMovies, END_POINTS.MOVIES.TOP_RATED, 1);
    });

    test("page에 2를 전달하면 page=2에 해당되는 영화 목록을 반환한다.", async () => {
      await testMovieApi(getTopRatedMovies, END_POINTS.MOVIES.TOP_RATED, 2);
    });
  });

  describe("getUpcomingMovies TEST", () => {
    test("getUpcomingMovies는 개봉 예정 영화 데이터를 반환한다.", async () => {
      await testMovieApi(getUpcomingMovies, END_POINTS.MOVIES.UPCOMING, 1);
    });

    test("page에 2를 전달하면 page=2에 해당되는 영화 목록을 반환한다.", async () => {
      await testMovieApi(getUpcomingMovies, END_POINTS.MOVIES.UPCOMING, 2);
    });
  });
});

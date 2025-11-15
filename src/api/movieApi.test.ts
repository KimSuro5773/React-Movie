import { tmdbClient } from "./tmdb";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "./movieApi";
import { END_POINTS } from "./endpoints";
import { mockMovieListResponse } from "@/test/movieMockData";

vi.mock("./tmdb", () => ({
  tmdbClient: {
    get: vi.fn(),
  },
}));

describe("movieApi TEST", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getNowPlayingMovies TEST", () => {
    test("getNowPlayingMovies는 현재 상영중인 영화 목록 데이터를 반환한다.", async () => {
      vi.mocked(tmdbClient.get).mockResolvedValue({ data: mockMovieListResponse });

      const result = await getNowPlayingMovies(1);

      expect(tmdbClient.get).toHaveBeenCalledWith(END_POINTS.MOVIES.NOW_PLAYING, {
        params: { page: 1 },
      });

      expect(result).toStrictEqual(mockMovieListResponse);
    });

    test("page에 2를 전달하면 page=2에 해당되는 영화 목록을 반환한다.", async () => {
      vi.mocked(tmdbClient.get).mockResolvedValue({ data: mockMovieListResponse });

      const result = await getNowPlayingMovies(2);

      expect(tmdbClient.get).toHaveBeenCalledWith(END_POINTS.MOVIES.NOW_PLAYING, {
        params: { page: 2 },
      });

      expect(result).toStrictEqual(mockMovieListResponse);
    });
  });

  describe("getPopularMovies TEST", () => {
    test("getPopularMovies는 인기 영화 목록 데이터를 반환한다.", async () => {
      vi.mocked(tmdbClient.get).mockResolvedValue({ data: mockMovieListResponse });

      const result = await getPopularMovies(1);

      expect(tmdbClient.get).toHaveBeenCalledWith(END_POINTS.MOVIES.POPULAR, {
        params: { page: 1 },
      });

      expect(result).toStrictEqual(mockMovieListResponse);
    });

    test("page에 2를 전달하면 page=2에 해당되는 영화 목록을 반환한다.", async () => {
      vi.mocked(tmdbClient.get).mockResolvedValue({ data: mockMovieListResponse });

      const result = await getPopularMovies(2);

      expect(tmdbClient.get).toHaveBeenCalledWith(END_POINTS.MOVIES.POPULAR, {
        params: { page: 2 },
      });

      expect(result).toStrictEqual(mockMovieListResponse);
    });
  });

  describe("getTopRatedMovies TEST", () => {
    test("getTopRatedMovies는 최고 평점 영화 목록 데이터를 반환한다.", async () => {
      vi.mocked(tmdbClient.get).mockResolvedValue({ data: mockMovieListResponse });

      const result = await getTopRatedMovies(1);

      expect(tmdbClient.get).toHaveBeenCalledWith(END_POINTS.MOVIES.TOP_RATED, {
        params: { page: 1 },
      });

      expect(result).toStrictEqual(mockMovieListResponse);
    });

    test("page에 2를 전달하면 page=2에 해당되는 영화 목록을 반환한다.", async () => {
      vi.mocked(tmdbClient.get).mockResolvedValue({ data: mockMovieListResponse });

      const result = await getTopRatedMovies(2);

      expect(tmdbClient.get).toHaveBeenCalledWith(END_POINTS.MOVIES.TOP_RATED, {
        params: { page: 2 },
      });

      expect(result).toStrictEqual(mockMovieListResponse);
    });
  });

  describe("getUpcomingMovies TEST", () => {
    test("getUpcomingMovies는 개봉 예정 영화 데이터를 반환한다.", async () => {
      vi.mocked(tmdbClient.get).mockResolvedValue({ data: mockMovieListResponse });

      const result = await getUpcomingMovies(1);

      expect(tmdbClient.get).toHaveBeenCalledWith(END_POINTS.MOVIES.UPCOMING, {
        params: { page: 1 },
      });

      expect(result).toStrictEqual(mockMovieListResponse);
    });

    test("page에 2를 전달하면 page=2에 해당되는 영화 목록을 반환한다.", async () => {
      vi.mocked(tmdbClient.get).mockResolvedValue({ data: mockMovieListResponse });

      const result = await getUpcomingMovies(2);

      expect(tmdbClient.get).toHaveBeenCalledWith(END_POINTS.MOVIES.UPCOMING, {
        params: { page: 2 },
      });

      expect(result).toStrictEqual(mockMovieListResponse);
    });
  });
});

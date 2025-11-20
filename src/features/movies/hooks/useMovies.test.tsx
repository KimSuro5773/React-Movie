import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import * as movieApi from "@/features/movies/api/movieApi";
import { renderHook, waitFor } from "@testing-library/react";
import {
  useNowPlayingMovies,
  usePopularMovies,
  useSearchMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "./useMovies";
import { mockMovieListResponse } from "@/__test__/mocks/movieMockData";

vi.mock("@/features/movies/api/movieApi");

describe("useMovies 커스텀 훅 TEST", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false, // 테스트에서 재시도 비활성화
        },
      },
    });
    vi.clearAllMocks();
  });

  const createWrapper = () => {
    return ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  describe("useNowPlayingMovies TEST", () => {
    test("현재 상영중 영화 데이터를 정상적으로 가져온다.", async () => {
      vi.mocked(movieApi.getNowPlayingMovies).mockResolvedValue(mockMovieListResponse);

      const { result } = renderHook(() => useNowPlayingMovies(1), {
        wrapper: createWrapper(),
      });

      expect(result.current.isLoading).toBe(true);
      expect(result.current.data).toBeUndefined();

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.data).toStrictEqual(mockMovieListResponse);
      expect(result.current.isLoading).toBe(false);
      expect(movieApi.getNowPlayingMovies).toHaveBeenCalledWith(1);
      expect(movieApi.getNowPlayingMovies).toHaveBeenCalledTimes(1);
    });

    test("page 파라미터를 생략하면 기본값 1로 요청한다.", async () => {
      vi.mocked(movieApi.getNowPlayingMovies).mockResolvedValue(mockMovieListResponse);

      const { result } = renderHook(() => useNowPlayingMovies(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(movieApi.getNowPlayingMovies).toHaveBeenCalledWith(1);
    });

    test("page가 변경되면 새로운 데이터를 요청한다.", async () => {
      vi.mocked(movieApi.getNowPlayingMovies).mockResolvedValue(mockMovieListResponse);

      const { result, rerender } = renderHook(({ page }) => useNowPlayingMovies(page), {
        wrapper: createWrapper(),
        initialProps: { page: 1 },
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));
      expect(movieApi.getNowPlayingMovies).toHaveBeenCalledWith(1);

      rerender({ page: 2 });

      await waitFor(() => expect(movieApi.getNowPlayingMovies).toHaveBeenCalledWith(2));
      expect(movieApi.getNowPlayingMovies).toHaveBeenCalledTimes(2);
    });
  });

  describe("usePopularMovies TEST", () => {
    test("인기 영화 데이터를 정상적으로 가져온다.", async () => {
      vi.mocked(movieApi.getPopularMovies).mockResolvedValue(mockMovieListResponse);

      const { result } = renderHook(() => usePopularMovies(1), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.data).toStrictEqual(mockMovieListResponse);
      expect(movieApi.getPopularMovies).toHaveBeenCalledWith(1);
    });
  });

  describe("useTopRatedMovies TEST", () => {
    test("최고 평점 영화 데이터를 정상적으로 가져온다.", async () => {
      vi.mocked(movieApi.getTopRatedMovies).mockResolvedValue(mockMovieListResponse);

      const { result } = renderHook(() => useTopRatedMovies(1), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.data).toStrictEqual(mockMovieListResponse);
      expect(movieApi.getTopRatedMovies).toHaveBeenCalledWith(1);
    });
  });

  describe("useUpcomingMovies TEST", () => {
    test("개봉 예정 영화 데이터를 정상적으로 가져온다.", async () => {
      vi.mocked(movieApi.getUpcomingMovies).mockResolvedValue(mockMovieListResponse);

      const { result } = renderHook(() => useUpcomingMovies(1), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.data).toStrictEqual(mockMovieListResponse);
      expect(movieApi.getUpcomingMovies).toHaveBeenCalledWith(1);
    });
  });

  describe("useSearchMovies TEST", () => {
    test("검색어가 있을 때 검색 데이터를 정상적으로 가져온다.", async () => {
      vi.mocked(movieApi.getSearchMovies).mockResolvedValue(mockMovieListResponse);

      const { result } = renderHook(() => useSearchMovies("어벤져스", 1), {
        wrapper: createWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.data).toStrictEqual(mockMovieListResponse);
      expect(movieApi.getSearchMovies).toHaveBeenCalledWith("어벤져스", 1);
    });

    test("빈 검색어일 때 API 호출을 하지 않는다 (enabled: false).", async () => {
      vi.mocked(movieApi.getSearchMovies).mockResolvedValue(mockMovieListResponse);

      const { result } = renderHook(() => useSearchMovies("", 1), {
        wrapper: createWrapper(),
      });

      expect(result.current.isPending).toBe(true);
      expect(result.current.data).toBeUndefined();

      await waitFor(() => {
        expect(movieApi.getSearchMovies).not.toHaveBeenCalled();
      });
    });

    test("검색어가 변경되면 새로운 검색을 수행한다.", async () => {
      vi.mocked(movieApi.getSearchMovies).mockResolvedValue(mockMovieListResponse);

      const { result, rerender } = renderHook(({ query, page }) => useSearchMovies(query, page), {
        wrapper: createWrapper(),
        initialProps: { query: "어벤져스", page: 1 },
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));
      expect(movieApi.getSearchMovies).toHaveBeenCalledWith("어벤져스", 1);

      rerender({ query: "스파이더맨", page: 1 });

      await waitFor(() => expect(movieApi.getSearchMovies).toHaveBeenCalledWith("스파이더맨", 1));
      expect(movieApi.getSearchMovies).toHaveBeenCalledTimes(2);
    });

    test("검색어는 유지하고 페이지만 변경하면 동일한 검색어로 페이지 요청한다.", async () => {
      vi.mocked(movieApi.getSearchMovies).mockResolvedValue(mockMovieListResponse);

      const { result, rerender } = renderHook(({ query, page }) => useSearchMovies(query, page), {
        wrapper: createWrapper(),
        initialProps: { query: "테스트", page: 1 },
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      rerender({ query: "테스트", page: 2 });

      await waitFor(() => expect(movieApi.getSearchMovies).toHaveBeenCalledWith("테스트", 2));
      expect(movieApi.getSearchMovies).toHaveBeenCalledTimes(2);
    });
  });
});

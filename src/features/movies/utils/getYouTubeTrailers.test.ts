import { getYouTubeTrailers } from "./getYouTubeTrailers";
import type { Videos } from "@features/movies/types/movie";

describe("getYouTubeTrailers", () => {
  test("YouTube Trailer만 필터링한다", () => {
    const videos: Videos = {
      results: [
        { key: "abc123", site: "YouTube", type: "Trailer" },
        { key: "def456", site: "YouTube", type: "Teaser" },
        { key: "ghi789", site: "Vimeo", type: "Trailer" },
        { key: "jkl012", site: "YouTube", type: "Trailer" },
      ],
    };

    const trailers = getYouTubeTrailers(videos);

    expect(trailers).toHaveLength(2);
    expect(trailers[0].key).toBe("abc123");
    expect(trailers[1].key).toBe("jkl012");
  });

  test("videos가 undefined일 때 빈 배열을 반환한다", () => {
    const trailers = getYouTubeTrailers(undefined);
    expect(trailers).toEqual([]);
  });

  test("results가 빈 배열일 때 빈 배열을 반환한다", () => {
    const videos: Videos = { results: [] };
    const trailers = getYouTubeTrailers(videos);
    expect(trailers).toEqual([]);
  });

  test("YouTube Trailer가 없을 때 빈 배열을 반환한다", () => {
    const videos: Videos = {
      results: [
        { key: "abc123", site: "Vimeo", type: "Trailer" },
        { key: "def456", site: "YouTube", type: "Teaser" },
      ],
    };

    const trailers = getYouTubeTrailers(videos);
    expect(trailers).toEqual([]);
  });
});
import { getYouTubeUrl } from "./getYouTubeUrl";

describe("getYouTubeUrl", () => {
  test("기본 YouTube embed URL을 생성한다", () => {
    const url = getYouTubeUrl("abc123");
    expect(url).toBe("https://www.youtube.com/embed/abc123");
  });

  test("autoplay 파라미터가 true일 때 autoplay를 추가한다", () => {
    const url = getYouTubeUrl("abc123", true);
    expect(url).toBe("https://www.youtube.com/embed/abc123?autoplay=1");
  });

  test("autoplay 파라미터가 false일 때 파라미터를 추가하지 않는다", () => {
    const url = getYouTubeUrl("abc123", false);
    expect(url).toBe("https://www.youtube.com/embed/abc123");
  });
});

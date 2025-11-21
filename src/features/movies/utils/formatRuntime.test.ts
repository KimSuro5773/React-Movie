import { formatRuntime } from "./formatRuntime";

describe("formatRuntime", () => {
  test("60분 미만일 때 '분'만 표시한다", () => {
    expect(formatRuntime(45)).toBe("45분");
    expect(formatRuntime(30)).toBe("30분");
    expect(formatRuntime(1)).toBe("1분");
  });

  test("정확히 1시간일 때 '시간'만 표시한다", () => {
    expect(formatRuntime(60)).toBe("1시간");
    expect(formatRuntime(120)).toBe("2시간");
  });

  test("시간과 분이 모두 있을 때 '시간 분' 형식으로 표시한다", () => {
    expect(formatRuntime(90)).toBe("1시간 30분");
    expect(formatRuntime(125)).toBe("2시간 5분");
    expect(formatRuntime(142)).toBe("2시간 22분");
  });

  test("0분일 때 처리한다", () => {
    expect(formatRuntime(0)).toBe("0분");
  });
});

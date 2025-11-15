import { API_CONFIG } from "@/api/config";
import { getPosterUrl } from "./getPosterUrl";

describe("getPosterUrl TEST", () => {
  const samplePath = "/testPoser.jpg";

  test("사이즈를 지정하지 않으면 기본 사이즈로 URL을 반환한다.", () => {
    const testUrl = getPosterUrl(samplePath);
    expect(testUrl).toBe(
      `${API_CONFIG.IMAGE_BASE_URL}/${API_CONFIG.POSTER_SIZES.MEDIUM}${samplePath}`,
    );
  });

  test("지정된 사이즈로 URL을 반환한다.", () => {
    const testUrl = getPosterUrl(samplePath, "LARGE");
    expect(testUrl).toBe(
      `${API_CONFIG.IMAGE_BASE_URL}/${API_CONFIG.POSTER_SIZES.LARGE}${samplePath}`,
    );
  });

  test("path가 null이면 null을 반환한다.", () => {
    const testUrl = getPosterUrl(null);
    expect(testUrl).toBeNull();
  });

  test("path가 빈 문자열이면 null을 반환한다.", () => {
    const testUrl = getPosterUrl("");
    expect(testUrl).toBeNull();
  });
});

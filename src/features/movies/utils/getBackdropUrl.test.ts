import { API_CONFIG } from "@/lib/api/config";
import { getBackdropUrl } from "./getBackdropUrl";

describe("getBackdrop TEST", () => {
  const samplePath = "/testPoser.jpg";

  test("사이즈를 지정하지 않으면 기본 사이즈로 URL을 반환한다.", () => {
    const testUrl = getBackdropUrl(samplePath);
    expect(testUrl).toBe(
      `${API_CONFIG.IMAGE_BASE_URL}/${API_CONFIG.BACKDROP_SIZES.MEDIUM}${samplePath}`,
    );
  });

  test("지정된 사이즈로 URL을 반환한다.", () => {
    const testUrl = getBackdropUrl(samplePath, "LARGE");
    expect(testUrl).toBe(
      `${API_CONFIG.IMAGE_BASE_URL}/${API_CONFIG.BACKDROP_SIZES.LARGE}${samplePath}`,
    );
  });

  test("path가 null이면 null을 반환한다.", () => {
    const testUrl = getBackdropUrl(null);
    expect(testUrl).toBeNull();
  });

  test("path가 빈 문자열이면 null을 반환한다.", () => {
    const testUrl = getBackdropUrl("");
    expect(testUrl).toBeNull();
  });
});

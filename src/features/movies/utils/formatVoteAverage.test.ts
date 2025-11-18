import { formatVoteAverage } from "./formatVoteAverage";

describe("formatVoteAverage TEST", () => {
  test("숫자 형식이 들어오면 string 형식 소수점 한 자리까지만 반환한다.", () => {
    const result = formatVoteAverage(5.5555);
    expect(result).toBe("5.5");
  });

  test("소수점이 없는 정수 형식이면 0을 붙인다.", () => {
    const result = formatVoteAverage(5);
    expect(result).toBe("5.0");
  });
});

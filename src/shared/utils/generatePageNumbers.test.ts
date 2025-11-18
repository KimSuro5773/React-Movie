import { generatePageNumbers } from "./generatePageNumbers";

describe("generatePageNumbers TEST", () => {
  describe("페이지가 7개 이하일 때", () => {
    test("페이지가 1개일 때 [1]를 반환한다.", () => {
      const result = generatePageNumbers(1, 1);
      expect(result).toStrictEqual([1]);
    });

    test("페이지가 5개일 때 [1,2,3,4,5]를 반환한다.", () => {
      const result = generatePageNumbers(1, 5);
      expect(result).toStrictEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("페이지가 8개 이상일 때", () => {
    test("첫 페이지일 때", () => {
      const result = generatePageNumbers(1, 100);
      expect(result).toStrictEqual([1, 2, 3, "ellipsis", 100]);
    });

    test("3 페이지이고 총 100 페이지 일때", () => {
      const result = generatePageNumbers(3, 100);
      expect(result).toStrictEqual([1, "ellipsis", 2, 3, 4, "ellipsis", 100]);
    });

    test("중간 페이지일 때", () => {
      const result = generatePageNumbers(50, 100);
      expect(result).toStrictEqual([1, "ellipsis", 49, 50, 51, "ellipsis", 100]);
    });

    test("98 페이지이고 총 100 페이지 일때", () => {
      const result = generatePageNumbers(98, 100);
      expect(result).toStrictEqual([1, "ellipsis", 97, 98, 99, "ellipsis", 100]);
    });

    test("마지막 페이지일 때", () => {
      const result = generatePageNumbers(100, 100);
      expect(result).toStrictEqual([1, "ellipsis", 98, 99, 100]);
    });
  });
});

import { reduce } from "./index";

describe("reduce", () => {
  test("normal", () => {
    expect(reduce([1, 2, 3, 4], (sum, n) => sum + n, 0)).toBe(10);
    expect(reduce<number, number>([1, 2, 3, 4], (sum, n) => sum + n)).toBe(10);
  });
});

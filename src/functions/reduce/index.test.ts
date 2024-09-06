import { reduce } from "./index";

describe("reduce", () => {
  test("normal", () => {
    expect(reduce((sum, n) => sum + n, 0, [1, 2, 3, 4])).toBe(10);
    expect(reduce<number, number>((sum, n) => sum + n, 0, [1, 2, 3, 4])).toBe(
      10
    );
  });
});


import { zip } from "./index";

describe("zip", () => {
  test("normal", () => {
    const a1 = [1, 3, 5];
    const a2 = [1, 2, 3, 4, 5];
    const a3 = [1, 2, 3, 4];

    expect(zip(a1, a2, a3)).toEqual([
      [1, 1, 1],
      [3, 2, 2],
      [5, 3, 3],
    ]);
  });
});

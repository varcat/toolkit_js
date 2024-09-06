import { ifElse } from ".";

describe("ifElse", () => {
  test("normal", () => {
    const result = ifElse(
      (x: number) => x > 0,
      (x: number) => x + 1,
      (x: number) => x - 1
    )(1);
    expect(result).toBe(2);
  });
});

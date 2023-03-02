import { movePrecision } from "./index";

describe("test", () => {
  test("normal", () => {
    const testData: any = [
      ["0", 0, "0"],
      ["0", 2, "0"],
      ["1", 2, "0.01"],
      ["-1", 2, "-0.01"],
    ];
    for (const x of testData) {
      expect(movePrecision(x[0], x[1])).toBe(x[2]);
    }
  });
});

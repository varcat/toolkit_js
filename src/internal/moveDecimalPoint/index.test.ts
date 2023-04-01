import { moveDecimalPoint } from "./index";

describe("test", () => {
  test("normal", () => {
    const testData: any = [
      ["0", 0, "0"],
      ["0", -2, "0"],
      ["1", -2, "0.01"],
      ["-1", -2, "-0.01"],
      ["-1", 2, "-100"],
      ["0", 2, "0"],
      ["0.0001", -2, "0.000001"],
      ["0.0001", 2, "0.01"],
      ["100.1", 2, "10010"],
      ["100.1", -2, "1.001"],
      ["200", -2, "2"],
      ["200", 2, "20000"],
    ];
    for (const x of testData) {
      expect(moveDecimalPoint(x[0], x[1])).toBe(x[2]);
    }
  });
});

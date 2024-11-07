import { decimalLength } from "./index";

describe("decimalLength", () => {
  test("normal", () => {
    expect(decimalLength("1.00")).toBe(2);
    expect(decimalLength("1.0000")).toBe(4);
    expect(decimalLength(".0000")).toBe(4);
    expect(decimalLength("0000")).toBe(0);
    expect(decimalLength("00.00")).toBe(2);
    expect(decimalLength("1.")).toBe(0);
  });
});

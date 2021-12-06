import { splitIntegerDecimal } from "./splitIntegerDecimal";

describe("splitIntegerDecimal.ts", () => {
  test("splitIntegerDecimal", () => {
    expect(splitIntegerDecimal("1")).toEqual(["1", ""]);
    expect(splitIntegerDecimal("100.00")).toEqual(["100", "00"]);
    expect(splitIntegerDecimal("100.39")).toEqual(["100", "39"]);
    expect(splitIntegerDecimal("100.000")).toEqual(["100", "000"]);
    expect(splitIntegerDecimal("100.000.000")).toEqual(["100.000.000", ""]);
    expect(splitIntegerDecimal("100,000.37")).toEqual(["100,000", "37"]);
    expect(splitIntegerDecimal(".123")).toEqual(["", "123"]);
    expect(splitIntegerDecimal(".12")).toEqual(["", "12"]);
    expect(splitIntegerDecimal("1.12")).toEqual(["1", "12"]);
    expect(splitIntegerDecimal("1e12.12")).toEqual(["1e12", "12"]);
    expect(splitIntegerDecimal("10,000.ab")).toEqual(["10,000.ab", ""]);
    expect(splitIntegerDecimal(null as unknown as any)).toEqual([null, ""]);
  });
});

import { toNumber } from "./toNumber";

describe("测试 toNumber", () => {
  test(`string"100,000.00" return 100000`, () => {
    expect(toNumber("100,000.00")).toBe(100000);
  });

  test(`string"-100,000.00" return 100000`, () => {
    expect(toNumber("-100,000.00")).toBe(-100000);
  });

  test(`NaN return 0`, () => {
    expect(toNumber(NaN)).toBe(0);
  });

  test("toNumber", () => {
    expect(toNumber(null)).toBe(0);
    expect(toNumber(undefined)).toBe(0);
    expect(toNumber(1)).toBe(1);
    expect(toNumber(10_000)).toBe(10000);
    expect(toNumber("10,000.20")).toBe(10000.2);
    expect(toNumber("-870,123,001.20")).toBe(-870123001.2);
    expect(toNumber(0.3)).toBe(0.3);
  });
});

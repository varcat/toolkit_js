import { isSafeNumber } from "./isSafeNumber";

describe("isSafeNumber.ts", () => {
  test("isSafeNumber", () => {
    expect(isSafeNumber(1)).toBe(true);
    expect(isSafeNumber(0.1 + 0.2)).toBe(true);
    expect(isSafeNumber(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isSafeNumber(Number.MIN_SAFE_INTEGER)).toBe(true);
    expect(isSafeNumber(Number.MAX_SAFE_INTEGER + 0.1)).toBe(true);
    expect(isSafeNumber(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
    expect(isSafeNumber(Number.MIN_SAFE_INTEGER - 0.1)).toBe(true);
    expect(isSafeNumber(Number.MIN_SAFE_INTEGER - 1)).toBe(false);
    expect(isSafeNumber(Infinity)).toBe(false);
    expect(isSafeNumber(-Infinity)).toBe(false);
    expect(isSafeNumber(NaN)).toBe(false);
    expect(isSafeNumber(null)).toBe(false);
    expect(isSafeNumber(undefined)).toBe(false);
    expect(isSafeNumber("")).toBe(false);
    expect(isSafeNumber([])).toBe(false);
    expect(isSafeNumber({})).toBe(false);
  });
});

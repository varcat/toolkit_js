import { isSafeNum } from "./isSafeNum";

describe("isSafeNum.ts", () => {
  test("isSafeNumber", () => {
    expect(isSafeNum(1)).toBe(true);
    expect(isSafeNum(0.1 + 0.2)).toBe(true);
    expect(isSafeNum(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isSafeNum(Number.MIN_SAFE_INTEGER)).toBe(true);
    expect(isSafeNum(Number.MAX_SAFE_INTEGER + 0.1)).toBe(true);
    expect(isSafeNum(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
    expect(isSafeNum(Number.MIN_SAFE_INTEGER - 0.1)).toBe(true);
    expect(isSafeNum(Number.MIN_SAFE_INTEGER - 1)).toBe(false);
    expect(isSafeNum(Infinity)).toBe(false);
    expect(isSafeNum(-Infinity)).toBe(false);
    expect(isSafeNum(NaN)).toBe(false);
    expect(isSafeNum(null)).toBe(false);
    expect(isSafeNum(undefined)).toBe(false);
    // @ts-ignore
    expect(isSafeNum("")).toBe(false);
    // @ts-ignore
    expect(isSafeNum([])).toBe(false);
    // @ts-ignore
    expect(isSafeNum({})).toBe(false);
  });
});

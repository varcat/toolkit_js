import { clamp } from "./clamp";
import { at } from "../at/at";

describe("clamp", () => {
  test("单独使用", () => {
    expect(clamp(0, 10, -1)).toBe(0);
    expect(clamp(0, 10, 11)).toBe(10);
    expect(clamp(0, 10, 2)).toBe(2);
  });

  test("组合使用,限制数组取值范围", () => {
    const safeAt = (index: number, xs: any[]) => {
      return at(clamp(0, xs.length - 1, index), xs);
    };
    const xs = [0, 1, 2, 3, 4];
    expect(safeAt(0, xs)).toBe(0);
    expect(safeAt(-1, xs)).toBe(0);
    expect(safeAt(-100, xs)).toBe(0);
    expect(safeAt(4, xs)).toBe(4);
    expect(safeAt(100, xs)).toBe(4);
  });
});

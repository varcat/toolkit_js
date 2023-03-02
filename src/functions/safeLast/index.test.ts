import { safeLast } from "./index";

describe("safeLast", () => {
  test("normal", () => {
    const arr = [1, 2];
    expect(safeLast(arr)).toBe(2);
    expect(safeLast(1 as unknown as any)).toBe(null);
    expect(safeLast({ length: 1 } as unknown as any)).toBe(null);
    expect(safeLast({ length: NaN } as unknown as any)).toBe(null);
    expect(safeLast({ length: 1, "0": "3" } as unknown as any)).toBe(null);
  });
});

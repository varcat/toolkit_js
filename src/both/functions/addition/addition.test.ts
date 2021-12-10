import { addition } from "./addition";

describe("addition", () => {
  test("1 + 2 = 3", () => {
    expect(addition(1, 2)).toBe(3);
  });

  test("1 + 2 + 3 + 4 = 10", () => {
    expect(addition(1, 2, 3, 4)).toBe(10);
  });

  test("0.1 + 0.2", () => {
    expect(addition(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test("数组", () => {
    // @ts-ignore
    expect(addition([1, 2, 3])).toEqual(6);
  });

  test("一个", () => {
    // @ts-ignore
    expect(addition([1])).toEqual(1);
    expect(addition(1)).toEqual(1);
    // @ts-ignore
    expect(addition(1, 2, [3, 4])).toEqual(10);
    // @ts-ignore
    expect(addition(1, 2, null)).toEqual(3);
  });
});

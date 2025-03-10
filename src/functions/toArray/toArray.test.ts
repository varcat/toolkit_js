import { toArray } from "./toArray";

describe("toArray.ts", () => {
  test(`'' should return []`, () => {
    expect(toArray("")).toEqual([]);
  });

  test(`Array<T> should return Array<T>`, () => {
    const arr = [1, 2, { type: "test" }];
    expect(toArray(arr)).toBe(arr);
  });

  test("toArray", () => {
    expect(toArray(0)).toEqual([0]);
    expect(toArray(true)).toEqual([true]);
    expect(toArray(null)).toEqual([]);
    expect(toArray(undefined)).toEqual([]);
  });
});

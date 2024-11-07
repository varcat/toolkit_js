import { zipWidth } from "./index";
import { zip } from "../zip";

describe("zipWith", () => {
  test("normal", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4];
    const arr3 = [5, 5];
    expect(zip(arr1, arr2, arr3)).toEqual([
      [1, 1, 5],
      [2, 2, 5],
    ]);
    const res = zipWidth((a, b) => a + b, arr1, arr2, arr3);
    expect(res).toEqual([7, 9]);
  });
});

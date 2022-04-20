import { zipWidth } from "./index";

describe("zipWith", () => {
  test("normal", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4];
    const arr3 = [5, 5];
    expect(zipWidth<number, number>((a, b) => a + b, arr1, arr2, arr3)).toEqual(
      [7, 9]
    );
  });
});

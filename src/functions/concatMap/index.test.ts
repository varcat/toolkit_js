import { concatMap } from "./index";

describe("concatMap", () => {
  test("normal", () => {
    expect(concatMap((x) => `Hi ${x}`, [1], 2, [3], [4])).toEqual([
      "Hi 1",
      "Hi 2",
      "Hi 3",
      "Hi 4",
    ]);
    expect(concatMap((x: any) => x, ["1"], 2, [3, 4], [[4], [2]])).toEqual([
      "1",
      2,
      3,
      4,
      [4],
      [2],
    ]);
    const arr1 = [1, 2, 3];
    const arr2 = [10, 20, 30];
    expect(concatMap((x: number) => x * 10, arr1, arr2, 5)).toEqual([
      10, 20, 30, 100, 200, 300, 50,
    ]);
  });
});

import { getVectorLength } from "./getVectorLength";

test("getVectorLength", () => {
  expect(getVectorLength({ x: 0, y: 10 })).toBe(10);
  expect(getVectorLength({ x: 3, y: 4 })).toBe(5);
  expect(getVectorLength({ x: -3, y: 4 })).toBe(5);
});

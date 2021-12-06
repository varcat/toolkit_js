import { getRotateDirection } from "./getRotateDirection";

test("getRotateDirection", () => {
  expect(getRotateDirection({ x: 0, y: 10 }, { x: 10, y: 0 })).toBe(-1);
  expect(getRotateDirection({ x: 0, y: -10 }, { x: 10, y: 0 })).toBe(1);
});

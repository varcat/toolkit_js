import { getRotateAngle } from "./getRotateAngle";

test("getRotateAngle", () => {
  expect(getRotateAngle({ x: 0, y: 10 }, { x: 10, y: 0 })).toBe(-90);
  expect(getRotateAngle({ x: 0, y: -10 }, { x: 10, y: 0 })).toBe(90);
  expect(getRotateAngle({ x: 0, y: -10 }, { x: 0, y: -10 })).toBe(0);
  expect(getRotateAngle({ x: 0, y: 10 }, { x: 0, y: 10 })).toBe(0);
  expect(getRotateAngle({ x: 0, y: 10 }, { x: 0, y: -10 })).toBe(-180);
});

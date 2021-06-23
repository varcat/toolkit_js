import { getMovingDirection } from "./getMovingDirection";

test("getMovingDirection", () => {
  expect(getMovingDirection({ x: 0, y: 0 }, { x: 10, y: -10 })).toEqual({
    x: 1,
    y: -1,
  });
  expect(getMovingDirection({ x: 50, y: 50 }, { x: 50, y: 150 })).toEqual({
    x: 0,
    y: 1,
  });
});

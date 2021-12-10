import { pointSub } from "./pointSub";

test("pointSub", () => {
  expect(pointSub({ x: 50, y: 50 }, { x: 100, y: 50 })).toEqual({
    x: -50,
    y: 0,
  });
});

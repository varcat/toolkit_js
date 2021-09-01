import { Vector } from "./Vector";

test("Vector", () => {
  const v1 = Vector.of({ x: 1, y: 1 });
  const v2 = Vector.of({ x: 2, y: 2 });
  expect(v1.getScale(v2)).toEqual(2);
  expect(v2.getScale(v1)).toEqual(0.5);
});

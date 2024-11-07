import { Vector } from "./Vector";

test("Vector", () => {
  const v1 = new Vector({ x: 10, y: 0 });
  const v2 = Vector.of({ x: 0, y: 5 });
  const v3 = new Vector({ x: 0, y: 3 }, { x: 4, y: 0 });

  expect(v1.getLength()).toEqual(10);
  expect(v2.getLength()).toEqual(5);
  expect(v1.getScale(v2)).toEqual(0.5);
  expect(v2.getScale(v1)).toEqual(2);
  expect(v3.getLength()).toEqual(5);
  expect(v1.getAngle(v2)).toBe(90);
  expect(v2.getAngle(v1)).toBe(-90);
});

import { and } from "./and";

test("and", () => {
  expect(and(1, 0)).toBe(false);
  expect(and(1, 0 !== null)).toBe(true);
  expect(and(1, () => false)).toBe(false);
  expect(and(() => true, false)).toBe(false);
  const obj = { info: {} };
  // @ts-ignore
  expect(and(obj, obj.info, obj.info.name)).toBe(false);
});

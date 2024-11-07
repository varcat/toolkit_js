import { and } from "./and";
import { isExist } from "../isExist/isExist";
import { prop } from "../prop";

test("and", () => {
  expect(and(true, false)).toBe(false);
  expect(and(1 === 1, 0 !== null)).toBe(true);
  expect(and(1 === 1, () => false)).toBe(false);
  expect(and(() => true, false)).toBe(false);
  const obj = { info: {} };
  expect(
    and(isExist(obj), isExist(obj.info), isExist(prop("info.name", obj)))
  ).toBe(false);
});

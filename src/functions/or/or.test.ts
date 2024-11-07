import { or } from "./or";

test("or", () => {
  expect(or(true, false)).toBe(true);
  expect(or(false, () => false)).toBe(false);
});

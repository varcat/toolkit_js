import { or } from "./or";

test("or", () => {
  expect(or(0, 1, false)).toBe(true);
  expect(or(null, undefined, 0, "")).toBe(false);
});

import { curry } from "./curry";

function add(l: number, r: number): number {
  return l + r;
}

test("", () => {
  const fn = curry(add);
  expect(fn(1, 2)).toBe(3);
  expect(fn(1)(2)).toBe(3);
  expect(fn()(1)(2)).toBe(3);
  const b = curry((a: string, b: number, d: string) => a.repeat(b) + d);
  const c = b("A");
  const d = c(2);
  expect(d("S")).toBe("AAS");
});

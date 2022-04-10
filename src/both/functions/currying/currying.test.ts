import { currying } from "./currying";

function add(l: number, r: number): number {
  return l + r;
}

test("", () => {
  const fn = currying(add);
  expect(fn(1, 2)).toBe(3);
  expect(fn(1)(2)).toBe(3);
  expect(fn()(1)(2)).toBe(3);
  const b = currying((a: string, b: number, d: string) => a.repeat(b) + d);
  const c = b("A");
  const d = c(2);
  expect(d("S")).toBe("AAS");
});

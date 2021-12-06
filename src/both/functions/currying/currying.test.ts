import {currying} from "./currying";

function add(l: number, r: number): number {
  return l + r;
}

test('', () => {
  const fn = currying(add);
  expect(fn(1, 2)).toBe(3);
  expect(fn(1)(2)).toBe(3);
  expect(fn()(1)(2)).toBe(3);
});

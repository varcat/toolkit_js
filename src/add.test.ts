import {add} from "./add";

test('1 + 2 = 3', () => {
  expect(add(1, 2)).toBe(3);
})

test('1 + 2 + 3 + 4 = 10', () => {
  expect(add(1, 2, 3, 4)).toBe(10);
})

test('0.1 + 0.2', () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
})

import {isIterable} from "./index";

test('isIterable', () => {
  expect(isIterable([])).toBe(true);
  expect(isIterable('')).toBe(true);
  expect(isIterable({})).toBe(false);
  expect(isIterable({[Symbol.iterator]() {}})).toBe(true);
})

import {mustArray} from "./mustArray";

test(`'' should return []`, () => {
  expect(mustArray('')).toEqual([]);
});

test(`Array<T> should return Array<T>`, () => {
  const arr = [1, 2, {type: 'test'}];
  expect(mustArray(arr)).toBe(arr);
});

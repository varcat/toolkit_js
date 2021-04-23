import {toArray} from "./toArray";

test(`'' should return []`, () => {
  expect(toArray('')).toEqual([]);
});

test(`Array<T> should return Array<T>`, () => {
  const arr = [1, 2, {type: 'test'}];
  expect(toArray(arr)).toBe(arr);
});

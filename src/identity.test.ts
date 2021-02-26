import {identity} from "./identity";

test('identity', () => {
  const arr = [1, 2, {type: 'test'}];
  expect(identity(arr)).toBe(arr);
});

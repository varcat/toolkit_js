import {isEmpty} from "./isEmpty";

test('"" is empty', () => {
    expect(isEmpty('')).toBe(true);
})

test('[] is empty', () => {
    expect(isEmpty([])).toBe(true);
});

test('0 is not empty', () => {
  expect(isEmpty(0)).toBe(false);
});

test('function is not empty', () => {
  const fn = () => {};
  expect(isEmpty(fn)).toBe(false);
});

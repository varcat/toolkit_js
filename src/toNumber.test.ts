import {toNumber} from "./toNumber";

test(`string"100,000.00" return 100000`, () => {
  expect(toNumber("100,000.00")).toBe(100000);
});

test(`string"-100,000.00" return 100000`, () => {
  expect(toNumber("-100,000.00")).toBe(-100000);
});

test(`NaN return 0`, () => {
  expect(toNumber(NaN)).toBe(0);
});

test('toNumber', () => {
  expect(toNumber(null)).toBe(0);
  expect(toNumber(undefined)).toBe(0);
  expect(toNumber(1)).toBe(1);
  expect(toNumber(10_000)).toBe(10000);
})

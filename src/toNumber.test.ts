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

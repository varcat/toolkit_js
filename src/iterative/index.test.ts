import {isExist} from "../isExist";
import {iterative} from "./index";
import {toNumber} from "../toNumber";

test('iterative', () => {
  expect(iterative(isExist)([1,2,3])).toEqual([true, true, true]);
  expect(iterative(toNumber)(['', 1, '1,000'])).toEqual([0, 1, 1000]);
})

import { isExist } from "../isExist/isExist";
import { notExist } from "../notExist/notExist";

export const reduce = <T, U = T>(
  processor: (
    previousValue: U,
    currentValue: T,
    currentIndex: number,
    array: T[]
  ) => U,
  initialValue: U,
  array: T[]
): U => {
  if (notExist(array)) {
    return initialValue!;
  }
  let result = (isExist(initialValue) ? initialValue : array[0]) as U;
  for (let i = isExist(initialValue) ? 0 : 1; i < array.length; i += 1) {
    result = processor(result, array[i], i, array);
  }
  return result;
};

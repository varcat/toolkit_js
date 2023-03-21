import { isExist } from "../isExist/isExist";
import { notExist } from "../notExist/notExist";

export const reduce = <T, U>(
  array: T[],
  callback: (
    previousValue: U,
    currentValue: T,
    currentIndex: number,
    array: T[]
  ) => U,
  initialValue?: U
): U => {
  if (notExist(array)) {
    return initialValue!;
  }
  let result = (isExist(initialValue) ? initialValue : array[0]) as U;
  for (let i = isExist(initialValue) ? 0 : 1; i < array.length; i += 1) {
    result = callback(result, array[i], i, array);
  }
  return result;
};

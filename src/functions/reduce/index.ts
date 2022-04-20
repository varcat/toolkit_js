import { isExist } from "../isExist/isExist";

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
  if (!Array.isArray(array)) {
    throw new TypeError("Expected array");
  }
  let result = (initialValue ?? array[0]) as U;
  for (let i = isExist(initialValue) ? 0 : 1; i < array.length; i += 1) {
    result = callback(result, array[i], i, array);
  }
  return result;
};

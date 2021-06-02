import { typeOf } from "./typeOf";

function add(xs: number[]): number {
  let sum = 0;
  for (let x of xs) {
    sum += x;
  }
  return sum;
}

export function addition(...numbers: number[]): number {
  if (numbers.length === 1) {
    if (typeOf(numbers[0]) === "Array") {
      return add(numbers[0] as unknown as number[]);
    }
    return numbers[0];
  }
  return add(numbers.flat(Infinity));
}

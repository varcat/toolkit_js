import { toNumber } from "../toNumber/toNumber";

export function addition(numbers: number[]): number;
export function addition(...numbers: number[]): number;
export function addition(numbers: any): number {
  let result = 0;

  function add(xs: number[]) {
    for (let i = 0; i < xs.length; i += 1) {
      if (typeof xs[i] === "number") {
        result += xs[i];
      } else if (typeof xs[i] === "string") {
        result += toNumber(xs[i]);
      } else if (Array.isArray(xs[i])) {
        add(xs[i] as unknown as number[]);
      }
    }
  }
  add(numbers);

  return result;
}

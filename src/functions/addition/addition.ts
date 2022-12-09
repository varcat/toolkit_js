import { plus } from "../plus";

export function addition(numbers: number[]): number;
export function addition(...numbers: number[]): number;
export function addition(...numbers: any): number {
  let result = "0";

  function add(xs: number[]) {
    for (let i = 0; i < xs.length; i += 1) {
      const x = xs[i];
      if (Array.isArray(x)) {
        add(x as unknown as number[]);
        continue;
      }
      if (typeof x === "string" || typeof x === "number") {
        result = plus(result, x.toString());
      }
    }
  }
  add(numbers);

  return Number(result);
}

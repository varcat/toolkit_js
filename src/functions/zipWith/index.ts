import { zip } from "../zip";
import { reduce } from "../reduce";

interface Op<T, U> {
  (result: U, x: T, index: number, xs: T[]): U;
}

export const zipWidth = <T, U>(op: Op<T, U>, ...xs: T[][]): U[] =>
  zip(...xs).map((x) => reduce(x, op));

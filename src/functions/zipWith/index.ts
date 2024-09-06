import { zip } from "../zip";
import { reduce } from "../reduce";
import { at } from "../at/at";

interface Op<T, U = T> {
  (result: U, x: T, index: number, xs: T[]): U;
}

export const zipWidth = <T, U>(op: Op<T, U>, ...xs: T[][]): U[] =>
  zip(...xs).map((x) => reduce(op, at(0)(x) as any, x.slice(1)));

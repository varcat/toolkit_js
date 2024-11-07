import { zip } from "../zip";

interface Op<T> {
  (result: T, x: T, index: number, xs: T[]): T;
}

export const zipWidth = <T>(op: Op<T>, ...xs: T[][]): T[] =>
  zip(...xs).map((x) => x.reduce(op));

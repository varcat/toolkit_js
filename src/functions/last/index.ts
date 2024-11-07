import { at } from "../at/at";
export function last<T>(xs: T[]): T | undefined {
  return at(-1, xs) as T;
}

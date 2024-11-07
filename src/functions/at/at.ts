import { curry } from "../curry/curry";

export const at = curry(<T>(index: number, xs: T[]): T | undefined => {
  return xs[index < 0 ? xs.length + index : index];
});

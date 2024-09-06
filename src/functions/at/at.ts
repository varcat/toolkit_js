import { clamp } from "../clamp/clamp";
import { curry } from "../curry/curry";
export const at = curry(<T>(index: number, xs: T[]): T | undefined => {
  return xs[clamp(0, xs.length - 1, (index < 0 ? xs.length : 0) + index)];
});

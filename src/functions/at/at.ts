import { clamp } from "../clamp/clamp";
export function at<T>(xs: T[], index: number): T | undefined {
  return xs[clamp(0, xs.length - 1, (index < 0 ? xs.length : 0) + index)];
}

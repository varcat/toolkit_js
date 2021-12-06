import { isNumber } from "../isNumber/isNumber";

export function isSafeNumber(x: any): boolean {
  return (
    isNumber(x) &&
    isFinite(x) &&
    Number.MIN_SAFE_INTEGER <= x &&
    x <= Number.MAX_SAFE_INTEGER
  );
}

import { isNumber } from "../../internal/isNumber/isNumber";

export function isSafeNum(x: any): boolean {
  if (x == null) return false;
  return (
    isNumber(x) &&
    isFinite(x) &&
    Number.MIN_SAFE_INTEGER <= x &&
    x <= Number.MAX_SAFE_INTEGER
  );
}

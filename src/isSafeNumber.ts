import {isNumber} from "./index";

export function isSafeNumber(x: any): boolean {
  return isNumber(x) && Number.MIN_SAFE_INTEGER <= x && x <= Number.MAX_SAFE_INTEGER;
}

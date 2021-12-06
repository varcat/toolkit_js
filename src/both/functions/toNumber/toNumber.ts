import { isSafeNumber } from "../isSafeNumber/isSafeNumber";
import { isNumber } from "../isNumber/isNumber";

export interface IToNumberParams {
  defaultValue: number;
}

export function toNumber(
  x: any,
  { defaultValue = 0 } = {} as IToNumberParams
): number {
  if (typeof x === "string") {
    x = x.replace(/[^-0-9.]/g, "");
  }
  const num = isNumber(x) ? x : Number(x);
  return isSafeNumber(num) ? num : defaultValue;
}

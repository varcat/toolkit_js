import { isSafeNumber } from "../isSafeNumber/isSafeNumber";
import { isNumber } from "../isNumber/isNumber";
import { isExist } from "../isExist/isExist";

export interface IToNumberParams {
  defaultValue: number;
}

export function toNumber(x: any, options = {} as IToNumberParams): number {
  if (typeof x === "string") {
    x = x.replace(/[^-0-9.]/g, "");
  }
  const num = isNumber(x) ? x : Number(x);
  if (!isSafeNumber(num)) return options.defaultValue ?? 0;
  return num;
}

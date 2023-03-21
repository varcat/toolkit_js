import { isSafeNumber } from "../isSafeNumber/isSafeNumber";
import { isNumber } from "../isNumber/isNumber";
import { isExist } from "../isExist/isExist";

export interface IToNumberParams {
  defaultValue: number;
}

export function toNumber(x: any, options = {} as IToNumberParams): number {
  if (typeof x === "string") {
    x = x.replace(/[^-\d.]/g, "");
  }
  const num = isNumber(x) ? x : Number(x);
  if (!isSafeNumber(num)) return isExist(options.defaultValue) ? options.defaultValue : 0;
  return num;
}

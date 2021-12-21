import { isSafeNumber } from "../isSafeNumber/isSafeNumber";
import { isNumber } from "../isNumber/isNumber";
import { isExist } from "../isExist/isExist";

export interface IToNumberParams {
  defaultValue: number;
  precision?: number;
}

export function toNumber(x: any, options = {} as IToNumberParams): number {
  if (typeof x === "string") {
    x = x.replace(/[^-0-9.]/g, "");
  }
  x.lastIndexOf(".");
  if (isExist(options.precision)) {
    const n = x[options.precision! + 1];
  }
  const num = isNumber(x) ? x : Number(x);
  if (!isSafeNumber(num)) return options.defaultValue;
  return num;
}

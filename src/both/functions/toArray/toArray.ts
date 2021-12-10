import { isExist } from "../isExist/isExist";
import { isNumber } from "../isNumber/isNumber";
import { typeOf } from "../typeOf/typeOf";

export function toArray<T>(x: any): Array<T> {
  if (Array.isArray(x)) return x;
  if (!isExist(x)) return [];
  if (isNumber(x) || typeOf(x) === "Boolean") return [x];
  try {
    return Array.from(x);
  } catch (e) {
    return [];
  }
}

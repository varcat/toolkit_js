import { isNumber } from "../isNumber/isNumber";
import { isExist } from "../isExist/isExist";
import { typeOf } from "../typeOf/typeOf";

export function isEmpty(
  x:
    | number
    | string
    | Array<any>
    | object
    | null
    | undefined
    | Set<any>
    | Map<any, any>
): boolean {
  if (!isExist(x)) return true;
  if (typeof x === "function" || isNumber(x)) return false;
  if (typeof x === "string") {
    return x.trim().length === 0;
  }
  if (Array.isArray(x)) {
    return x.length === 0;
  }
  if (x instanceof Set) {
    return (x as Set<any>).size === 0;
  }
  if (x instanceof Map) {
    return (x as Map<any, any>).size === 0;
  }
  if (x instanceof FormData) {
    return x.keys().next().done ?? true;
  }
  if (typeOf(x) === "Object") {
    return Object.keys(x as object).length === 0;
  }

  return false;
}

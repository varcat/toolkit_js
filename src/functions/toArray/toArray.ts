import { isNumber } from "../../internal/isNumber/isNumber";
import { typeOf } from "../typeOf/typeOf";
import { isIterable } from "../isIterable";
import { isNil } from "../isNil";

export function toArray<T>(x: any): Array<T> {
  if (Array.isArray(x)) return x;
  if (isNil(x)) return [];
  if (isNumber(x) || typeOf(x) === "Boolean") return [x];
  if (isIterable(x)) {
    return Array.from(x);
  }
  return [];
}

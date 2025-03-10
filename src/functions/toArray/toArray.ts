import { isNumber } from "../../internal/isNumber/isNumber";
import { typeOf } from "../typeOf/typeOf";
import { isIterable } from "../isIterable";
import { isNil } from "../isNil";

type ToArray<T> = [T] extends [any[]] ? T : T[];

export function toArray<T>(x: T): ToArray<T> {
  if (Array.isArray(x)) return x;
  if (isNil(x)) return [] as ToArray<T>;
  if (isNumber(x) || typeOf(x) === "Boolean") {
    return [x] as ToArray<T>;
  }
  if (isIterable(x)) {
    return Array.from(x) as ToArray<T>;
  }
  return [] as ToArray<T>;
}

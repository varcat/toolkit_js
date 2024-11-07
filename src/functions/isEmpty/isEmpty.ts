import { isExist } from "../isExist/isExist";
import { isNil } from "../isNil";
import { typeOf } from "../typeOf/typeOf";

export function isEmpty(x: any): boolean {
  if (isNil(x)) return true;
  if (typeof x === "string") {
    return x.length === 0;
  }
  if (Array.isArray(x)) {
    return x.length === 0;
  }
  if (typeOf(x) === "Object") {
    return Object.keys(x as object).length === 0;
  }
  if (typeOf(x) === "FormData") {
    const isDone = (x as FormData).keys().next().done;
    return isExist(isDone) ? isDone! : true;
  }
  return false;
}

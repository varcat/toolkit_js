import { typeOf } from "../typeOf/typeOf";

export function isNumber(x: any): boolean {
  return typeOf(x) === "Number";
}

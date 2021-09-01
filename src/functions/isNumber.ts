import { typeOf } from "./typeOf";

export function isNumber(x: any): boolean {
  return typeOf(x) === "Number";
}

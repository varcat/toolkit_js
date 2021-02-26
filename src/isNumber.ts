import {typeOf} from "./index";

export function isNumber(x: any): boolean {
  return typeOf(x) === 'Number';
}

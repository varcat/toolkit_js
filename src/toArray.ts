import {isExist, isNumber, typeOf} from "./index";

export function toArray<T>(x: any): Array<T> {
  if (Array.isArray(x)) return x;
  if (!isExist(x)) return [];
  if (isNumber(x) || typeOf(x) === 'Boolean') return [x];
  try {
    return Array.from(x);
  } catch (e) {
    return [];
  }
}

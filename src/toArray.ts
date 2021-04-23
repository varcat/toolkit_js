import {isExist} from "./index";

export function toArray<T>(x: any): Array<T> {
  if (Array.isArray(x)) return x;
  if (!isExist(x)) return [];
  try {
    return Array.from(x);
  } catch (e) {
    return [];
  }
}
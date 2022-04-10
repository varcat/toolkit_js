import { isExist } from "../isExist/isExist";
import { prop } from "../prop";

export type TUniquePropertyFn<T> = (item: T) => any;

export function unique<T>(
  arr: Array<T>,
  property?: string | Array<string | number> | TUniquePropertyFn<T>
) {
  if (!property) {
    return [...new Set(arr)];
  }
  const record = new Map();
  const result = [];
  for (let crt of arr) {
    const val =
      typeof property === "function"
        ? property(crt)
        : typeof crt === "object" && isExist(crt)
        ? prop(property, crt)
        : crt;
    if (record.get(val)) {
      continue;
    }
    record.set(val, true);
    result.push(crt);
  }
  return result;
}

import { isExist } from "./isExist";

export function notExist(x: any): boolean {
  return !isExist(x);
}

import { isExist } from "./isExist/isExist";

export function notExist(x: any): boolean {
  return !isExist(x);
}

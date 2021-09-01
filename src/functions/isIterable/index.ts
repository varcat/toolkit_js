import { isExist } from "../isExist";

export const isIterable = (x: any): boolean => {
  return isExist(x) && typeof x[Symbol.iterator] === "function";
};

import { isExist } from "../isExist/isExist";

export const isIterable = (x: any): x is Iterable<any> => {
  return isExist(x) && typeof x[Symbol.iterator] === "function";
};

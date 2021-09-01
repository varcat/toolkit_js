import { isIterable } from "../isIterable/index";

export function iterative(fn: Function) {
  return function (subject: any, ...rest: any[]) {
    if (isIterable(subject)) {
      const ret = [];
      for (let obj of subject) {
        ret.push(fn(obj, ...rest));
      }
      return ret;
    }
    return fn(subject, ...rest);
  };
}

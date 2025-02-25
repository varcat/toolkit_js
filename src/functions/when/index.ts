import { curry } from "../curry/curry";

export const when = curry(
  <T, O>(pred: (a: T) => boolean, whenTrueFn: (a: T) => O, x: T): T | O => {
    return pred(x) ? whenTrueFn(x) : x;
  }
);

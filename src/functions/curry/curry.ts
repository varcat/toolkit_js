import type { Cast, Drop, Length } from "../../type/types";

type Curry<P extends any[], R> = <T extends any[]>(
  ...args: Cast<T, Partial<P>>
) => {
  0: Curry<Cast<Drop<Length<T>, P>, any[]>, R>;
  1: R;
}[Drop<Length<T>, P> extends [any, ...any] ? 0 : 1];

export const curry = <P extends any[], R>(
  fn: (...args: P) => R
): Curry<P, R> => {
  const curry = (...args: any[]): any => {
    if (args.length >= fn.length) {
      return fn(...(args as unknown as P));
    }
    return curry.bind(null, ...args);
  };
  return curry;
};

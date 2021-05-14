export function pipe(...fns: Function[]) {
  return (...args: unknown[]): unknown => {
    return fns.reduce((res, fn) => [fn(...res)], args)[0];
  };
}

export function currying<T extends Function>(fn: T): T {
  const arity = fn.length;
  return function curry(...args: any[]): any {
    if (args.length < arity) {
      return curry.bind(null, ...args);
    }
    return fn(...args);
  } as unknown as T;
}

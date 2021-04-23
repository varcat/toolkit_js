export function currying(fn: Function) {
  const arity = fn.length;
  return function curry(...args: any[]): any {
    if (args.length < arity) {
      return curry.bind(null, ...args);
    }
    return fn(...args);
  }
}

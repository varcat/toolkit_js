export function once<T, R>(fn: (a: T) => R) {
  let done = false;
  let result: R;
  return (a: T) => {
    if (done) return result;
    done = true;
    result = fn(a);
    return result;
  };
}

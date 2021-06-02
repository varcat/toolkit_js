export function once<T extends Function>(fn: T): T {
  let done = false;
  return ((...args: any[]) => {
    if (done) return;
    done = true;
    fn(...args);
  }) as unknown as T;
}

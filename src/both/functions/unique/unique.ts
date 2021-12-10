export type TUniquePropertyFn<T> = (item: T) => any

export function unique<T>(arr: Array<T>, property?: string | TUniquePropertyFn<T>) {
  if (!property) {
    return [...new Set(arr)]
  }
  const record = new Map();
  const result = [];
  for (let crt of arr) {
    // @ts-ignore
    const val = typeof property === 'function' ? property(crt) : crt[property];
    if (record.get(val)) {
      continue;
    }
    record.set(val, true);
    result.push(crt);
  }
  return result;
}

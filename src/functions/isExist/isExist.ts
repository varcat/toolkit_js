export function isExist<T>(x: T): x is T {
  return x != null;
}

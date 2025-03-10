export function isExist<T>(x: T): x is NonNullable<T> {
  return x != null;
}

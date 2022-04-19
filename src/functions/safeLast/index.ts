export function safeLast<T>(xs: T[]): T | undefined {
  if (!Array.isArray(xs)) return undefined;
  return xs?.[xs?.length - 1];
}

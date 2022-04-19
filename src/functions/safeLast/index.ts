export function safeLast<T>(xs: T[]): T | undefined {
  if (!Array.isArray(xs) || xs.length === 0) return undefined;
  return xs[xs.length - 1];
}

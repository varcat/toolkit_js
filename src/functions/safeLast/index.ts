export function safeLast<T>(xs: T[]): T | null {
  if (!Array.isArray(xs) || xs.length === 0) return null;
  return xs[xs.length - 1];
}

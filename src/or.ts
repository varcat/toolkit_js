export function or(...conditions: unknown[]): boolean {
  for (const expr of conditions) {
    if (Boolean(expr)) return true;
  }
  return false;
}

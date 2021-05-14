export function and(...conditions: unknown[]): boolean {
  for (let expr of conditions) {
    if (!Boolean(expr)) return false;
  }
  return true;
}

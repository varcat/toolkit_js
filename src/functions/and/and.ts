export function and(...conditions: any[]): boolean {
  for (const expr of conditions) {
    if (typeof expr === "function" && !expr()) return false;
    if (!Boolean(expr)) return false;
  }
  return true;
}

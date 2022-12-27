export function or(...conditions: any[]): boolean {
  for (const expr of conditions) {
    if (typeof expr === "function" && expr()) return true;
    if (Boolean(expr)) return true;
  }
  return false;
}

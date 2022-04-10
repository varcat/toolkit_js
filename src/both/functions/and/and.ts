export function and(...conditions: any[]): boolean {
  for (let expr of conditions) {
    if (typeof expr === "function") return expr();
    if (!Boolean(expr)) return false;
  }
  return true;
}

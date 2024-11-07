// #region TCondition
type TCondition = boolean | (() => boolean);
// #endregion TCondition

export function and(...conditions: TCondition[]): boolean {
  for (const expr of conditions) {
    if (typeof expr === "function" && !expr()) return false;
    if (expr === false) return false;
  }
  return true;
}

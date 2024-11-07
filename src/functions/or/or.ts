// #region TCondition
type TCondition = boolean | (() => boolean);
// #endregion TCondition

export function or(...conditions: TCondition[]): boolean {
  for (const expr of conditions) {
    if (typeof expr === "function" && expr()) return true;
    if (expr === true) return true;
  }
  return false;
}

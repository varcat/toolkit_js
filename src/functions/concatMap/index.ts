// #region Fn
type Fn<T = any, R = T> = (x: T) => R;
// #endregion Fn

export const concatMap = <T = any, R = T>(
  f: Fn<T, R>,
  ...xs: (any | any[])[]
): R[] => {
  const result = [];
  for (let x of xs) {
    if (Array.isArray(x)) {
      for (let i of x) {
        result.push(f(i));
      }
    } else {
      result.push(f(x));
    }
  }
  return result;
};

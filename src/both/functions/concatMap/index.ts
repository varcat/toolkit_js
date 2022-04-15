type Fn = (x: any) => any;
export const concatMap = (f: Fn, ...xs: any[]): any[] => {
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

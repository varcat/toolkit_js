export const zip = <T>(...xs: T[][]): T[][] => {
  const r: T[][] = [];
  let nple: T[] = [];
  const length = Math.min.apply(
    null,
    xs.map((x) => x.length)
  );
  for (let i = 0; i < length; i++) {
    xs.forEach((x) => nple.push(x[i]));
    r.push(nple);
    nple = [];
  }
  return r;
};

export const getDecimalsLength = (x: number | string): number => {
  const str = typeof x === 'string' ? x : x.toString();
  const idx = str.indexOf(".");
  if (idx === -1) return 0;
  return str.length - idx - 1;
};

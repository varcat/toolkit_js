export const getPrecision = (x: string): number => {
  const idx = x.indexOf(".");
  if (idx === -1) return 0;
  return x.length - idx - 1;
};

export const getPrecision = (x: string): number => {
  const idx = x.indexOf(".");
  if (idx === -1) return 0;
  return x.length - idx - 1;
};

export const processPrecision = (x: string, p: number): string => {
  if (p === 0) return x;
  const hasSymbol = x[0] === "-";
  const val = hasSymbol ? x.slice(1) : x;
  let num: string;
  if (p > val.length) {
    num = `0.${"0".repeat(p - val.length)}${val}`;
  } else {
    num =
      (val.slice(0, val.length - p) || "0") + "." + val.slice(val.length - p);
  }
  return (
    (hasSymbol ? "-" : "") +
    num.replace(/([1-9])(0*)$/, "$1").replace(/\.0*$/, "")
  );
};

export const plus = (a: string, b: string): string => {
  const ap = getPrecision(a);
  const bp = getPrecision(b);
  const precision = Math.max(ap, bp);
  const aVal = a.replace(".", "") + "0".repeat(precision - ap);
  const bVal = b.replace(".", "") + "0".repeat(precision - bp);
  return processPrecision((BigInt(aVal) + BigInt(bVal)).toString(), precision);
};

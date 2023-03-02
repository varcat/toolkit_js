export const movePrecision = (x: string, p: number): string => {
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

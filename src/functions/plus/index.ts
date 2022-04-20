import { toNumberStr } from "../toNumberStr";

const getPrecision = (x: string): number => {
  const idx = x.indexOf(".");
  if (idx === -1) return 0;
  return x.length - idx - 1;
};

export const plus = (a: string, b: string): string => {
  const ap = getPrecision(a);
  const bp = getPrecision(b);
  const precision = Math.max(ap, bp);
  const aVal = a.replace(".", "") + "0".repeat(precision - ap);
  const bVal = b.replace(".", "") + "0".repeat(precision - bp);
  const resultStr = (BigInt(aVal) + BigInt(bVal)).toString();
  if (precision === 0) return resultStr;
  return toNumberStr(
    resultStr.slice(0, resultStr.length - precision) +
      "." +
      resultStr.slice(resultStr.length - precision)
  );
};

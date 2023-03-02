import { movePrecision } from "../../internal/movePrecision";
import { getDecimalsLength } from "../getDecimalsLength";

export const plus = (a: string | number, b: string | number): string => {
  a = a.toString();
  b = b.toString();
  const ap = getDecimalsLength(a);
  const bp = getDecimalsLength(b);
  const precision = Math.max(ap, bp);
  const aVal = a.replace(".", "") + "0".repeat(precision - ap);
  const bVal = b.replace(".", "") + "0".repeat(precision - bp);
  return movePrecision((BigInt(aVal) + BigInt(bVal)).toString(), precision);
};

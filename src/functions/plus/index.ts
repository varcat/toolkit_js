import { getPrecision } from "../getPrecision";
import { movePrecision } from "../../internal/movePrecision";

export const plus = (a: string, b: string): string => {
  const ap = getPrecision(a);
  const bp = getPrecision(b);
  const precision = Math.max(ap, bp);
  const aVal = a.replace(".", "") + "0".repeat(precision - ap);
  const bVal = b.replace(".", "") + "0".repeat(precision - bp);
  return movePrecision((BigInt(aVal) + BigInt(bVal)).toString(), precision);
};

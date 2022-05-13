import { getPrecision, processPrecision } from "../plus";

export function multipliedBy(a: string, b: string): string {
  const ap = getPrecision(a);
  const bp = getPrecision(b);
  const precision = ap + bp;
  const maxPrecision = Math.max(ap, bp);
  const aVal = a.replace(".", "") + "0".repeat(maxPrecision - ap);
  const bVal = b.replace(".", "") + "0".repeat(maxPrecision - bp);
  return processPrecision((BigInt(aVal) * BigInt(bVal)).toString(), precision);
}

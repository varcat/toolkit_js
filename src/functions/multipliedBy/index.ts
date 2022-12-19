import { getPrecision, processPrecision } from "../plus";

export function multipliedBy(a: string, b: string): string {
  const ap = getPrecision(a);
  const bp = getPrecision(b);
  const precision = ap + bp;
  const aVal = a.replace(".", "");
  const bVal = b.replace(".", "");
  return processPrecision((BigInt(aVal) * BigInt(bVal)).toString(), precision);
}

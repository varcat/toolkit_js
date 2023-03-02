import {movePrecision} from "../../internal/movePrecision";
import {getDecimalsLength} from "../getDecimalsLength";

export function multipliedBy(a: string | number, b: string | number): string {
  a = a.toString();
  b = b.toString();
  const ap = getDecimalsLength(a);
  const bp = getDecimalsLength(b);
  const precision = ap + bp;
  const aVal = a.replace(".", "");
  const bVal = b.replace(".", "");
  return movePrecision((BigInt(aVal) * BigInt(bVal)).toString(), precision);
}

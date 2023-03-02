import { getPrecision } from "../plus";
import {movePrecision} from "../../internal/movePrecision";

export function multipliedBy(a: string, b: string): string {
  const ap = getPrecision(a);
  const bp = getPrecision(b);
  const precision = ap + bp;
  const aVal = a.replace(".", "");
  const bVal = b.replace(".", "");
  return movePrecision((BigInt(aVal) * BigInt(bVal)).toString(), precision);
}

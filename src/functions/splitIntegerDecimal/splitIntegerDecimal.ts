import { isSafeNumber } from "../isSafeNumber/isSafeNumber";
import { isExist } from "../isExist/isExist";

export function splitIntegerDecimal(amount: number | string): [string, string] {
  if (isSafeNumber(amount)) {
    amount = amount.toString();
  }
  const res: [string, string] = [amount as string, ""];
  if (typeof amount !== "string") {
    return res;
  }
  const match = amount.match(/\.(\d+)$/);
  const pointIndex = (match && isExist(match.index)) ? match.index :  -1;
  const hasOnlyPoint = amount.indexOf(".") === pointIndex;
  if (!hasOnlyPoint || (match && typeof match[1] !== "string")) return res;
  const isDecimal = match ? isSafeNumber(parseInt(match[1])) : false;
  if (!isDecimal) return res;
  res[0] = amount.substring(0, pointIndex);
  res[1] = amount.substring(pointIndex + 1, amount.length);
  return res;
}

import { isSafeNumber } from "../isSafeNumber/isSafeNumber";

export function splitIntegerDecimal(amount: number | string): [string, string] {
  if (isSafeNumber(amount)) {
    amount = amount.toString();
  }
  const res: [string, string] = [amount as string, ""];
  if (typeof amount !== "string") {
    return res;
  }
  const match = amount.match(/\.(\d+)$/);
  const pointIndex = match?.index ?? -1;
  const hasOnlyPoint = amount.indexOf(".") === pointIndex;
  if (!hasOnlyPoint || typeof match?.[1] !== "string") return res;
  const isDecimal = isSafeNumber(parseInt(match[1]));
  if (!isDecimal) return res;
  res[0] = amount.substring(0, pointIndex);
  res[1] = amount.substring(pointIndex + 1, amount.length);
  return res;
}

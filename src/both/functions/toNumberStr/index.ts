import { isEmpty } from "..";

export function toNumberStr(x: any): string {
  if (typeof x === "number") return String(x);
  if (typeof x === "boolean") return x ? "1" : "0";
  if (Array.isArray(x)) return x.length.toString();
  if (typeof x !== "string") return "0";
  const res = x.replace(/[^0-9-.]/gi, "");
  return isEmpty(res) ? "0" : res;
}

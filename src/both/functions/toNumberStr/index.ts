import { isEmpty } from "..";

enum NumberType {
  unknown,
  int,
  float,
  floatZeroDecimal,
  zero,
  zeroDot,
  floatDot,
}

const numberMap: { [k: string]: boolean } = {
  "0": true,
  "1": true,
  "2": true,
  "3": true,
  "4": true,
  "5": true,
  "6": true,
  "7": true,
  "8": true,
  "9": true,
};
const legalCharMap: { [k: string]: boolean } = {
  "-": true,
  "+": true,
  ".": true,
};

export function toNumberStr(
  x: number | string | boolean | Array<number | string>
): string {
  if (typeof x === "number") return String(x);
  if (typeof x === "boolean") return x ? "1" : "0";
  if (Array.isArray(x)) {
    return toNumberStr(x.flat(Infinity).join(""));
  }
  if (typeof x !== "string") return isEmpty(x) ? "0" : "1";
  let symbol = "";
  let res = "";
  let resType: NumberType = NumberType.unknown;
  // 小数点出现的index
  let pointIndex = -1;
  /*
   * 用于切除小数部分后多余的0，例: 3.14000 => 3.14
   * 小数部分非0的最后一位后的偏移量，例: 10.00200, nonzeroEnd === 6
   * */
  let nonzeroEnd = 0;

  const initResType = (char: string) => {
    switch (char) {
      case "-":
        symbol = symbol ? "" : "-";
        return;
      case "+":
        symbol = symbol ? symbol : "";
        return;
      case ".":
        resType = NumberType.floatDot;
        res = "0.";
        pointIndex = 1;
        return;
      case "0":
        resType = NumberType.zero;
        res = char;
        return;
    }
    if (numberMap[char]) {
      resType = NumberType.int;
      res += char;
    }
  };

  for (let l of x) {
    if (!(legalCharMap[l] || numberMap[l])) continue;
    if (resType === NumberType.unknown) {
      initResType(l);
      continue;
    }
    switch (resType) {
      // "0"
      case NumberType.zero:
        if (l === "0") continue;
        if (l === ".") {
          resType = NumberType.zeroDot;
          pointIndex = res.length;
          res += l;
        } else if (numberMap[l]) {
          resType = NumberType.int;
          res = l;
        }
        continue;
      // "0."
      case NumberType.zeroDot:
        if (l === "0") {
          resType = NumberType.floatZeroDecimal;
          res += l;
        } else if (numberMap[l]) {
          resType = NumberType.float;
          res += l;
          nonzeroEnd = res.length;
        }
        continue;
      // "[1-9]+\d*"
      case NumberType.int:
        if (l === ".") {
          resType = NumberType.floatDot;
          pointIndex = res.length;
          res += l;
        } else if (numberMap[l]) {
          res += l;
        }
        continue;
      // "\d+\."
      case NumberType.floatDot:
        if (l === "0") {
          resType = NumberType.floatZeroDecimal;
          res += l;
        } else if (numberMap[l]) {
          resType = NumberType.float;
          res += l;
          nonzeroEnd = res.length;
        }
        continue;
      // 小数部分全部为0
      case NumberType.floatZeroDecimal:
        if (l === "0") {
          res += l;
        } else if (numberMap[l]) {
          resType = NumberType.float;
          res += l;
          nonzeroEnd = res.length;
        }
        continue;
      case NumberType.float:
        if (numberMap[l]) {
          res += l;
          if (l !== "0") {
            nonzeroEnd = res.length;
          }
        }
    }
  }
  if (resType === NumberType.zeroDot) return symbol ? "0" : "-0";
  if (
    resType === NumberType.floatZeroDecimal ||
    resType === NumberType.floatDot
  )
    return `${symbol}${res.slice(0, pointIndex)}`;
  if (resType === NumberType.float)
    return `${symbol}${res.slice(0, nonzeroEnd)}`;
  return isEmpty(res) || resType === NumberType.unknown
    ? `${symbol}0`
    : `${symbol}${res}`;
}

import { isEmpty } from "..";

enum NumberType {
  unknown,
  signed,
  unsigned,
  int,
  float,
  floatZeroDecimal,
  uint,
  uFloat,
  uFloatZeroDecimal,
  zero,
  uZero,
  zeroDot,
  uZeroDot,
  floatDot,
  uFloatDot,
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
  if (typeof x !== "string") return "0";
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
        resType = NumberType.signed;
        res += char;
        return;
      case "+":
        resType = NumberType.unsigned;
        return;
      case ".":
        resType = NumberType.uFloatDot;
        res += "0.";
        pointIndex = 1;
        return;
      case "0":
        resType = NumberType.uZero;
        res = "0";
        return;
    }
    if (numberMap[char]) {
      resType = NumberType.uint;
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
      // "-"
      case NumberType.signed:
        if (l === "0") {
          resType = NumberType.zero;
          res += l;
        } else if (l === ".") {
          resType = NumberType.zeroDot;
          res = "-0.";
          pointIndex = 2;
        } else if (numberMap[l]) {
          resType = NumberType.int;
          res += l;
        } else if (l === "-") {
          resType = NumberType.unsigned;
          res = "";
        }
        continue;
      // "-0"
      case NumberType.zero:
        if (l === "0") continue;
        if (l === ".") {
          resType = NumberType.zeroDot;
          pointIndex = res.length;
          res += l;
        } else if (numberMap[l]) {
          resType = NumberType.int;
          res = `-${l}`;
        }
        continue;
      // "-0."
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
      // ""
      case NumberType.unsigned:
        if (l === "0") {
          resType = NumberType.uZero;
          res += l;
        } else if (l === ".") {
          resType = NumberType.uZeroDot;
          res = "0.";
        } else if (numberMap[l]) {
          resType = NumberType.int;
          res += l;
        } else if (l === "-") {
          resType = NumberType.signed;
          res = l;
        }
        continue;
      case NumberType.uZero:
        if (l === "0") continue;
        if (l === ".") {
          resType = NumberType.uZeroDot;
          pointIndex = res.length;
          res += l;
        } else if (numberMap[l]) {
          resType = NumberType.uint;
          res = l;
        }
        continue;
      case NumberType.uZeroDot:
        if (l === "0") {
          resType = NumberType.uFloatZeroDecimal;
          res += l;
        } else if (numberMap[l]) {
          resType = NumberType.uFloat;
          res += l;
          nonzeroEnd = res.length;
        }
        continue;
      case NumberType.int:
        if (l === ".") {
          resType = NumberType.floatDot;
          pointIndex = res.length;
          res += l;
        } else if (numberMap[l]) {
          res += l;
        }
        continue;
      case NumberType.uint:
        if (l === ".") {
          resType = NumberType.uFloatDot;
          pointIndex = res.length;
          res += l;
        } else if (numberMap[l]) {
          res += l;
        }
        continue;
      // "-\d+."
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
      case NumberType.uFloatDot:
        if (l === "0") {
          resType = NumberType.uFloatZeroDecimal;
          res += l;
        } else if (numberMap[l]) {
          resType = NumberType.uFloat;
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
      case NumberType.uFloatZeroDecimal:
        if (l === "0") {
          res += l;
        } else if (numberMap[l]) {
          resType = NumberType.uFloat;
          res += l;
          nonzeroEnd = res.length;
        }
        continue;
      case NumberType.float:
      case NumberType.uFloat:
        if (numberMap[l]) {
          res += l;
          if (l !== "0") {
            nonzeroEnd = res.length;
          }
        }
    }
  }
  if (resType === NumberType.zeroDot) return "-0";
  if (resType === NumberType.uZeroDot) return "0";
  if (
    resType === NumberType.floatZeroDecimal ||
    resType === NumberType.uFloatZeroDecimal
  )
    return res.slice(0, pointIndex);
  if (resType === NumberType.float || resType === NumberType.uFloat)
    return res.slice(0, nonzeroEnd);
  return isEmpty(res) || resType === NumberType.unknown ? "0" : res;
}

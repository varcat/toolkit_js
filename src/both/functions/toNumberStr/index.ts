import { isEmpty } from "..";

enum NumberType {
  unknown,
  signed,
  unsigned,
  int,
  float,
  uint,
  uFloat,
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
        resType = NumberType.uFloat;
        res += "0.";
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
      case NumberType.signed:
        if (l === "0") {
          resType = NumberType.zero;
          res += l;
        } else if (l === ".") {
          resType = NumberType.zeroDot;
          res = "-0.";
        } else if (numberMap[l]) {
          resType = NumberType.int;
          res += l;
        } else if (l === "-") {
          resType = NumberType.unsigned;
          res = "";
        }
        continue;
      case NumberType.zero:
        if (l === "0") continue;
        if (l === ".") {
          resType = NumberType.zeroDot;
          res += l;
        } else if (numberMap[l]) {
          resType = NumberType.int;
          res = `-${l}`;
        }
        continue;
      case NumberType.zeroDot:
        if (numberMap[l]) {
          resType = NumberType.float;
          res += l;
        }
        continue;
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
          res += l;
        } else if (numberMap[l]) {
          resType = NumberType.uint;
          res = l;
        }
        continue;
      case NumberType.uZeroDot:
        if (numberMap[l]) {
          resType = NumberType.uFloat;
          res += l;
        }
        continue;
      case NumberType.int:
        if (l === ".") {
          resType = NumberType.floatDot;
        } else if (numberMap[l]) {
          res += l;
        }
        continue;
      case NumberType.uint:
        if (l === ".") {
          resType = NumberType.uFloatDot;
        } else if (numberMap[l]) {
          res += l;
        }
        continue;
      case NumberType.floatDot:
        if (numberMap[l]) {
          resType = NumberType.float;
          res += `.${l}`;
        }
        continue;
      case NumberType.uFloatDot:
        if (numberMap[l]) {
          resType = NumberType.uFloat;
          res += `.${l}`;
        }
        continue;
      case NumberType.float:
      case NumberType.uFloat:
        if (numberMap[l]) {
          res += l;
        }
    }
  }
  if (resType === NumberType.zeroDot) return "-0";
  if (resType === NumberType.uZeroDot) return "0";
  return isEmpty(res) || resType === NumberType.unknown ? "0" : res;
}

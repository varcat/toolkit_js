import {
  decimalLength,
  splitIntegerDecimal,
  toNumberStr,
} from "../../functions";

export const moveDecimalPoint = (x: string | number, p: number): string => {
  // 判断输入的数值是否为字符串
  if (typeof x !== "string" && typeof x !== "number") {
    throw new Error("Input must be a string or number.");
  }
  x = x.toString();
  if (p === 0) return x;
  if (!/[^0.]/.test(x)) return "0";
  // 判断是否有符号
  const hasSymbol = x[0] === "-";
  // 截取无符号的数字部分
  const val = hasSymbol ? x.slice(1) : x;
  // 已有小数长度 加上 移动的小数位数
  const flotLength = -decimalLength(val) + p;
  const [int, flot] = splitIntegerDecimal(val);
  let num: string = `${int}${flot}`.replace(/^0*/, "");
  if (flotLength === 0) {
    num = `${int}${flot}`;
  } else if (flotLength > 0) {
    num = `${int}${flot}${"0".repeat(flotLength)}`;
  } else {
    const len = Math.abs(flotLength);
    const numLength = num.length;
    if (len >= numLength) {
      num = `0.${"0".repeat(len - numLength)}${num}`;
    } else {
      num = `${num.slice(0, numLength - len)}.${num.slice(numLength - len)}`;
    }
  }
  return (hasSymbol ? "-" : "") + toNumberStr(num);
};

import { isEmpty } from "../../functions/isEmpty/isEmpty";
import { isNil } from "../../functions/isNil";

export function propStrToList(props: string): Array<string | number> {
  const res: Array<string | number> = [];
  const leftBrackets: Array<string> = [];
  const quotations: Array<string> = [];
  let text = "";

  const isInt = (token: string) => /^\d+$/.test(token);
  const isQuotation = (x: string) => [`'`, `"`].includes(x);
  const last = (xs: Array<string>) => xs[xs.length - 1];

  const initToken = (isBraceMatching?: boolean) => {
    if (!isEmpty(text) || isBraceMatching === true) {
      if (isInt(text)) {
        res.push(parseInt(text));
      } else {
        res.push(text);
      }
    }
    text = "";
  };

  for (let alpha of props) {
    if (isQuotation(alpha)) {
      // 匹配成对的引号
      if (last(quotations) === alpha) {
        quotations.pop();
        initToken(true);
        continue;
      }
      initToken();
      quotations.push(alpha);
      continue;
    }
    if (alpha === "[" && isEmpty(quotations)) {
      initToken();
      leftBrackets.push(alpha);
      continue;
    }
    if (alpha === "]" && isEmpty(quotations)) {
      const leftBracket = leftBrackets.pop();
      if (isNil(leftBracket)) {
        throw new SyntaxError("Unexpected token ']'");
      }
      initToken();
      continue;
    }
    if (alpha === ".") {
      if (isEmpty(leftBrackets) && isEmpty(quotations)) {
        initToken();
        continue;
      }
    }
    text += alpha;
  }
  initToken();
  if (!isEmpty(leftBrackets)) {
    throw new SyntaxError("括号数量不匹配");
  }
  if (!isEmpty(quotations)) {
    throw new SyntaxError("引号数量不匹配");
  }
  return res;
}

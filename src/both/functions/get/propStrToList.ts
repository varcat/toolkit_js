import { isEmpty } from "../isEmpty/isEmpty";
import { notExist } from "../notExist";

export function propStrToList(props: string): Array<string | number> {
  const res: Array<string | number> = [];
  const leftBrackets: Array<string> = [];
  const quotations: Array<string> = [];
  let text = "";

  const isInt = (token: string) => /^[0-9]+$/.test(token);
  const isQuotation = (x: string) => [`'`, `"`].includes(x);
  const last = (xs: Array<string>) => xs[xs.length - 1];

  const initToken = () => {
    if (!isEmpty(text)) {
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
      if (last(quotations) === alpha) {
        quotations.pop();
        initToken();
        continue;
      }
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
      if (notExist(leftBracket)) {
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
    throw new SyntaxError("括号不匹配");
  }
  if (!isEmpty(quotations)) {
    throw new SyntaxError("引号不匹配");
  }
  return res;
}

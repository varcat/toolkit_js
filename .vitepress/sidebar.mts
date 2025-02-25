/**
 * 配置文档参考
 * https://vitepress.dev/reference/default-theme-sidebar#sidebar
 */

export default {
  "/class/": setLink(["Vector"], "/class/"),
  "/fn/": [
    {
      text: "Function",
      collapsed: false,
      items: setLink(["curry", "identity", "once", "pipe", "emptyFn"]),
    },
    {
      text: "Object",
      collapsed: false,
      items: setLink(["prop"]),
    },
    {
      text: "List",
      collapsed: false,
      items: setLink([
        "at",
        "isIterable",
        "iterative",
        "toArray",
        "treeEach",
        "unique",
        "zip",
        "zipWith",
        "concatMap",
        "last",
      ]),
    },
    {
      text: "Math",
      collapsed: false,
      items: setLink([
        "decimalLength",
        "isSafeNum",
        "splitIntegerDecimal",
        "toNumberStr",
        "clamp",
      ]),
    },
    {
      text: "Logic",
      collapsed: false,
      items: setLink(["ifElse", "and", "or", "isEmpty", "when"]),
    },
    {
      text: "Type",
      collapsed: false,
      items: setLink(["isNil", "typeOf", "isExist", "isIterable"]),
    },
    {
      text: "DOM",
      collapsed: false,
      items: setLink(["matrixTo", "getPoint"]),
    },
    {
      text: "Utils",
      collapsed: false,
      items: setLink([
        "sleep",
        "throttle",
        "debounce",
        "toggle",
        "promiseTry",
        "toPromiseTuple",
      ]),
    },
  ],
};

function setLink(xs: string[], prefix = "/fn/") {
  return xs
    .sort((a, b) => (a > b ? 1 : a == b ? 0 : -1))
    .map((x) => ({ text: x, link: prefix + x + "/" }));
}

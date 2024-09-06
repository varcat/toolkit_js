export default [
  {
    text: "快速开始",
    link: "/docs/quick-start",
  },
  {
    text: "Function",
    collapsed: false,
    items: setLink([
      "curry",
      "identity",
      "isEmpty",
      "isExist",
      "notExist",
      "once",
      "pipe",
      "typeOf",
      "and",
      "or",
    ]),
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
    ]),
  },
  {
    text: "Math",
    collapsed: false,
    items: setLink([
      "getDecimalsLength",
      "isSafeNumber",
      "splitIntegerDecimal",
      "toNumber",
      "toNumberStr",
    ]),
  },
  {
    text: "DOM",
    collapsed: false,
    items: setLink(["matrixTo"]),
  },
  {
    text: "Utils",
    collapsed: false,
    items: setLink(["sleep", "throttle", "debounce", "to"]),
  },
];

function setLink(xs: string[], prefix = "/fn/") {
  return xs
    .sort((a, b) => (a > b ? 1 : a == b ? 0 : -1))
    .map((x) => ({ text: x, link: prefix + x + "/" }));
}

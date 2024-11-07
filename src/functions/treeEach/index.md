# treeEach(xs, fn, options)

遍历树

## 入参

| 参数    | 类型                  | 必填 | 说明 |
| :------ | :-------------------- | :--- | :--- |
| xs      | any[]                 | 是   | -    |
| fn      | [Fn](#Fn)             | 是   |      |
| options | [IOptions](#IOptions) | 是   |      |

```ts
type treeEach = <T>(xs: T[], fn: Fn<T>, options?: IOptions) => T[];
```

<span id="Fn"></span>

<<< ./index.ts#Fn

<span id="IOptions"></span>

<<< ./index.ts#IOptions

## 示例

```ts
// 测试数据
const tree1 = [
  null,
  {
    name: "1",
    children: [
      { name: "1.1", children: null },
      { name: "1.2", children: [{ name: "1.2.1" }] },
      {
        name: "1.3",
        children: [
          {
            name: "1.3.1",
          },
          {
            name: "1.3.2",
          },
        ],
      },
    ],
  },
  {
    name: "2",
    children: [
      {
        name: "2.1",
      },
    ],
  },
];

// 从根节点开始遍历
const strArr: string[] = [];
treeEach(tree1, (x) => {
  if (!x) return x;
  strArr.push(x.name);
  // 注意需要返回 x，否则无法遍历子节点
  return x; // [!code highlight]
});
strArr.join("/"); // 1/1.1/1.2/1.2.1/1.3/1.3.1/1.3.2/2/2.1

// 从叶子节点开始遍历
const strArr2: string[] = [];
treeEach(
  tree1,
  (x) => {
    if (!x) return x;
    strArr2.push(x.name);
    return x;
  },
  { startLeaf: true }
);
strArr2.join("/"); // 1.1/1.2.1/1.2/1.3.1/1.3.2/1.3/1/2.1/2
```

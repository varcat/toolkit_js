树遍历
```typescript
type Fn<T> = (
  item: T,
  index?: number,
  list?: T[],
  // 树层级，top从0开始
  level?: number,
  // 父节点，level 0 时为null
  parent?: T | null
) => T;

interface IOptions {
  // 后代节点key，默认为 "children"
  childKey?: string;
  // 是否过滤不存在的节点 <null | undefined>
  filterNull?: boolean;
  // 是否过滤为空的节点
  filterEmpty?: boolean;
  // false表示从top开始遍历，true表示从叶节点遍历
  startLeaf?: boolean;
}

type treeEach = <T>(xs: T[], fn: Fn<T>, options?: IOptions) => T[];

const tree1 = [
  null,
  {
    name: "1",
    children: [
      { name: "1.1", children: null },
      { name: "1.2", children: [{name: '1.2.1'}] },
      {
        name: "1.3",
        children: [
          {
            name: "1.3.1"
          },
          {
            name: "1.3.2"
          }
        ]
      }
    ]
  },
  {
    name: '2',
    children: [
      {
        name: '2.1'
      }
    ]
  }
];

let strArr: string[] = [];
treeEach(tree1, (x) => {
  if (!x) return x;
  strArr.push(x.name);
  return x;
});
strArr.join('/') // 1/1.1/1.2/1.2.1/1.3/1.3.1/1.3.2/2/2.1

let strArr2: string[] = [];
treeEach(tree1, (x) => {
  if (!x) return x;
  strArr2.push(x.name);
  return x;
}, {startLeaf: true});
strArr2.join('/') // 1.1/1.2.1/1.2/1.3.1/1.3.2/1.3/1/2.1/2
```

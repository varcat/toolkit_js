# prop(idx, subject)

## 入参

| 参数    | 类型                                                           | 必填 | 说明 |
| :------ | :------------------------------------------------------------- | :--- | :--- |
| idx     | string \| number \| symbol\| Array<string \| number \| symbol> | 是   | -    |
| subject | Object \| Array                                                | 是   | -    |

## 返回

返回属性值

## 示例

```typescript
const s1 = Symbol();
const obj = { a: 1, b: { c: 2, d: [1, 2, 3], [s1]: "s1" } };
const arr = [1, 2, [3, 4, [5]]];

prop("a", obj); // 1
prop("a.b", obj); // undefined
prop("b.c")(obj); // 2
prop(["b", "c"])(obj); // 2
prop("b.d.0")(obj); // 1
prop("b.d.2")(obj); // 3
prop(["b", "d", s1])(obj); // "s1"
prop("0")(arr); // 1
prop("2[2].0")(arr); // 5
```

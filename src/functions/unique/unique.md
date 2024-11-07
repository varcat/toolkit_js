# unique(arr, property)

去重

## 入参

| 参数     | 类型   | 必填 | 说明                          |
| :------- | :----- | :--- | :---------------------------- |
| arr      | any[]  | 是   | -                             |
| property | string | 否   | 可由[prop](/fn/prop/)解析的值 |

## 示例

```javascript
// 基础类型去重
unique([1, 1, 3]); // [1, 3]

// 通过指定属性去重
arr = [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 2 }];
unique(arr, "id"); // [{id: 1}, {id: 2}]

// 使用函数获取去重的属性值
arr = [
  { info: { id: 1 } },
  { info: { id: 2 } },
  { info: { id: 3 } },
  { info: { id: 2 } },
];
unique(arr, (x) => x.info.id);
// [
//   {info: {id: 1}},
//   {info: {id: 2}},
//   {info: {id: 3}},
// ]
```

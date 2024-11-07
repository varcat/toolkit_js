# iterative(fn)

将只支持单个参数的函数转变为可支持数组参数的函数

## 入参

| 参数 | 类型         | 必填 | 说明 |
| :--- | :----------- | :--- | :--- |
| fn   | (arg) => any | 是   | -    |

## 返回

`(...arg) => any[]`

## 示例

```typescript
// isExist 只支持一个入参
isExist(null); // false
// 支持数组入参
const isExists = iterative(isExist);
isExists([null, 1, {}]); // 结果也将变为数组 [ false, true, true ]
```

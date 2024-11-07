# concatMap(fn, ...items)

Array.concat 与 Array.map 的合并操作

## 入参

| 参数  | 类型      | 必填 | 说明           |
| :---- | :-------- | :--- | :------------- |
| fn    | [Fn](#Fn) | 是   | -              |
| items | T \| T[]  | 是   | 多个元素或数组 |

<span id=Fn></span>

<<< ./index.ts#Fn

## 示例

```typescript
const arr1 = [1, 2, 3];
const arr2 = [10, 20, 30];

concatMap((x) => x * 10, arr1, arr2, 1); // [10, 20, 30, 100, 200, 300, 10]
```

# matrixTo(str)

转换 Dom 元素的 transform 字符串

## 入参

| 参数 | 类型   | 必填 | 说明 |
| :--- | :----- | :--- | :--- |
| str  | string | 是   | -    |

## 返回

<<< ./matrixTo.ts#TTransformInfo

## 示例

```ts
const el = document.getElementById("test");

// matrix(0.5, 0, 0, 0.5, 5, 5);
const str = window.getComputedStyle(el).transform;

matrixTo(str);
```

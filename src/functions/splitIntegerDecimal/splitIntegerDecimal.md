# splitIntegerDecimal(x)

拆分整数与小数部分, 还可以配合[toNumberStr](/fn/toNumberStr/)使用

## 入参

| 参数 | 类型             | 必填 | 说明                             |
| :--- | :--------------- | :--- | :------------------------------- |
| x    | number \| string | 是   | 传递非数字字符串时，直接返回原值 |

## 返回

```ts
[string, string]; // [ 整数部分，小数部分 ]
```

## 示例

<<< ./splitIntegerDecimal.test.ts

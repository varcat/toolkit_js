# toNumberStr(x)

将入参转为合法的数字字符串

## 入参

| 参数 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| x    | any  | 是   | -    |

## 返回

```ts
string;
```

## 示例

```typescript
toNumberStr(12); // "12"
toNumberStr("011"); // "11"
toNumberStr("-.100"); // "-0.1"
toNumberStr("0000"); // "0"
toNumberStr("1,999,120.001000"); // "1999120.001"
```

<<< index.test.ts

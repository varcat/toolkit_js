# when(pred, whenTrueFn, ipt)

`pred` 返回 `true` 则调用 `whenTrueFn`, 否则返回 `ipt `

## 入参

| 参数       | 说明 | 类型             | 默认值 |
| :--------- | :--- | :--------------- | :----- |
| pred       |      | (ipt) => boolean | -      |
| whenTrueFn |      | (ipt) => out     | -      |
| ipt        |      | any              | -      |

## 返回

```ts
ReturnType<whenTrueFn> | ipt;
```

## 示例

```typescript
when(isString, toUpperCase)("this"); // 'THIS'
when(isString, toUpperCase)(29); // 29
```


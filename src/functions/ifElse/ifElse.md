# ifElse(condition, onTrue, onFalse)

## 入参

```ts
type ifElse = <T = any, Result = any>(
  condition: (arg: T) => boolean,
  onTrue: (arg: T) => Result,
  onFalse: (arg: T) => Result
) => (arg: T) => Result;
```

## 返回

```ts
(arg: T) => Result;
```

## 示例

<<< ./index.test.ts

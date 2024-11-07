# debounce(fn, wait, options)

防抖函数

## 入参

<<< ./debounce.ts#IDebounceOpts

```typescript
type debounce<T extends Function> = (
  // 需要防抖的函数
  fn: T,

  // 防抖时间
  wait: number,

  // 额外配置
  options?: IThrottleOpts
) => T;
```

## 示例

```ts
const logNow = () => {
  console.log(Date.now());
};

const debounceFn = debounce(logNow, 1000);
while (true) {
  // 每隔一秒调用 logNow
  debounceFn();
}
```

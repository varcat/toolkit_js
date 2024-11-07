# throttle(func, wait, options)

节流函数

## 入参

<<< ./throttle.ts#IThrottleOpts

```typescript
type debounce<T extends Function> = (
  // 需要节流的函数
  func: T,

  // 节流时间
  wait: number,

  // 额外配置参见 IOpts
  options?: IOpts
) => T;
```

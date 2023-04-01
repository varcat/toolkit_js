节流函数

```typescript
interface IOpts {
  leading?: boolean; // default: false 开始时是否调用函数
  trailing?: boolean; // default: true 结束时是否调用函数
  maxWait?: number; // default: wait 为0则开始到结束之间的事件不调用函数
}
type debounce<T extends Function> = (
    // 需要节流的函数
    func: T,

    // 节流时间
    wait: number,

    // 额外配置参见 IOpts
    options?: IOpts
) => T;
```

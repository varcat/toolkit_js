防抖
```typescript
interface IOpts {
  leading?: boolean; // default: false 开始时是否调用函数
  trailing?: boolean; // default: true 结束时是否调用函数
}
type debounce<T extends Function> = (
    // 需要防抖的函数
    func: T,

    // 防抖时间
    wait: number,

    // 额外配置，参见上方 IOpts
    options?: IOpts
) => T;
```

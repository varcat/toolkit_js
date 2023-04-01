包装给定的入参函数，返回仅执行一次的函数

```typescript
const arr: number[] = [];
function push(x: number) {
  arr.push(x)
}
// 调用 oncePush 仅会触发一次
const oncePush = once(push);
oncePush(1);
oncePush(2);
oncePush(3);
arr; // [1]
```

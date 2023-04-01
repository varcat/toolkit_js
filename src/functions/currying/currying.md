柯里化：把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下的参数且返回结果的新函数
```typescript
function add(l: number, r: number): number {
  return l + r;
}

const curryAdd = currying(add);
curryAdd(1, 2) // 3
curryAdd(1)(2) // 3
curryAdd()(1)(2) // 3
```

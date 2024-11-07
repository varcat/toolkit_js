# curry(fn)

把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下的参数且返回结果的新函数

## 入参

| 参数 | 类型     | 必填 | 说明 |
| :--- | :------- | :--- | :--- |
| fn   | Function | 是   | -    |

## 返回

返回 curry 后的函数

## 示例

```typescript
function add(l: number, r: number): number {
  return l + r;
}

// add 函数有两个形参，满足两个参数后才会调用
const curryAdd = curry(add);
curryAdd(1, 2); // 3
curryAdd(1)(2); // 3
curryAdd()(1)(2); // 3
```

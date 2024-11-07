# isSafeNum(x)

判断是否是安全的数字

## 入参

| 参数 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| x    | any  | 是   | -    |

## 示例

```javascript
isSafeNum(0); // true
isSafeNum(1); // true
isSafeNum(-1); // true
isSafeNum(Number.MIN_SAFE_INTEGER); // true
isSafeNum(Number.MAX_SAFE_INTEGER); // true

isSafeNum(NaN); // false
isSafeNum(Infinity); // false
isSafeNum(""); // false
isSafeNum([]); // false
isSafeNum(true); // false
```

# isNil(v)

判断值不存在(undefined | null)

## 入参

| 参数 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| v    | any  | 是   | -    |

## 示例

```javascript
isNil(null); // true
isNil(undefined); // true

isNil(0); // false
isNil(""); // false
isNil([]); // false
isNil([1, 2, 3]); // false
```

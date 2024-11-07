# isExist(v)

判断入参是否存在，仅`null || undefined`为`false`(不存在)

## 入参

| 参数 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| v    | any  | 是   | -    |

## 示例

```javascript
isExist(null); // false
isExist(undefined); // false

isExist(0); // true
isExist(""); // true
isExist([]); // true
isExist([1, 2, 3]); // true
```

# or(...conditions)

入参表达式或函数返回为 `true`，则 or 函数返回 true，否则返回 false

## 入参

| 参数       | 类型       | 必填 | 说明 |
| :--------- | :--------- | :--- | :--- |
| conditions | TCondition | 是   | -    |

<<< ./or.ts#TCondition

## 示例

```javascript
or(true, false); // true
or(false, true); // true
or(() => false, false); // false
```

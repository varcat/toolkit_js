# and(...x)

## 入参

| 参数 | 类型                | 必填 | 说明 |
| :--- | :------------------ | :--- | :--- |
| x    | [TCondition](#expr) | 是   | -    |

<span id=expr></span>

<<< ./and.ts#TCondition

## 示例

```javascript
and(true, false); // false
and(true, 0 !== null); // true
and(1 > 0, () => false); // false
```

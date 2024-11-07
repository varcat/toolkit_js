# toggle(xs)

在给定状态或函数中切换

## 入参

| 参数 | 类型                      | 必填 | 说明 |
| :--- | :------------------------ | :--- | :--- |
| xs   | Array\<any \| () => any\> | 是   | -    |

## 示例

```typescript
const toggleStatus = toggle(["one", "two", () => "three"]);
toggleStatus(); // "one"
toggleStatus(); // "two"
toggleStatus(); // "three"
toggleStatus(); // "one"
```

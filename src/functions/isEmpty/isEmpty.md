# isEmpty(x)

判断入参是否为空

- `string`：`str.trim()`后 `str.length === 0` 则为空字符串
- `null || undefined`: 为空
- `Object`: `Object.keys(obj).length === 0`
- 还支持判断`Array`, `Set`, `Map`, `FormData`

## 示例

```javascript
isEmpty(""); // true
isEmpty("  "); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty(new Map()); // true
isEmpty(new Set()); // true
isEmpty(() => {}); // false
isEmpty(0); // false
```

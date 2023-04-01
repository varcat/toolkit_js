判断入参是否为空
- `string`：`trim`后判断`length`是否为0
- `null || undefined`: 为空
- `number || NaN || Infinity`: 不为空
- 还支持判断`Array`, `Set`, `Map`, `FormData`, `Object`

```javascript
isEmpty('') // true
isEmpty('  ') // true
isEmpty([]) // true
isEmpty({}) // true
isEmpty(new Map()) // true
isEmpty(new Set()) // true
isEmpty(() => {}) // false
isEmpty(0) // false
```

在给定状态或函数中切换

```typescript
const toggleStatus = toggle(["one", "two", () => "three"]);
toggleStatus(); // "one"
toggleStatus(); // "two"
toggleStatus(); // "three"
toggleStatus(); // "one"
```

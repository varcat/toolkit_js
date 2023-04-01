prop是currying化的[get](#get)

```typescript
const obj = { user: {name: 'n'} };
prop(`name.name`)(obj); // 'n'
```

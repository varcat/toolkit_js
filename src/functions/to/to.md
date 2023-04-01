不使用try...catch... 优雅捕获Promise错误

```javascript
const queryFn = (id) => service.findUserById(id);

// 常规捕获错误
(async () => {
    this.loading = true;
    try {
      queryFn(1);
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
})();

// 使用 to 处理错误
(async () => {
  this.loading = true;
  const [err, data] = await to(queryFn(1));
  this.loading = false;
  if (err) console.error(e);
})();
```

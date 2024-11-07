# toPromiseTuple(promise, errorExt)

不使用 try...catch... 优雅捕获 Promise 错误

## 入参

| 参数     | 类型    | 必填 | 说明              |
| :------- | :------ | :--- | :---------------- |
| promise  | Promise | 是   | -                 |
| errorExt | Object  | 否   | 附加到 Error 的值 |

## 返回

## 示例

```typescript
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
  const [err, data] = await toPromiseTuple(queryFn(1));
  this.loading = false;
  if (err) console.error(e);
})();
```

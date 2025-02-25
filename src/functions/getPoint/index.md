# getPoint(event, index)

另参考 [Vector](/class/Vector/)

## 入参

| 参数  | 类型       | 必填 | 说明 |
| :---- | :--------- | :--- | :--- |
| event | TouchEvent | 是   | -    |
| index | number     | 是   | -    |

## 返回

<<< @/src/type/Point.ts#Point

## 示例

```typescript
addEventListener("touchstart", (ev) => {
  getPoint(ev, 0);
});
```

### 拖动

```ts
// 此处省略获取 TouchEvent 的代码
const startPoint = getPoint(ev, 0);
const endPoint = getPoint(ev, 0);

// 通过开始、结束的两点，计算出位移距离
const delta = {
  x: endPoint.x - startPoint.x,
  y: endPoint.y - startPoint.y,
};
```

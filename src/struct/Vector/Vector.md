可用于判断手势动作

**ICoord**
```typescript
interface ICoord {
  x: number;
  y: number;
}
```

两种构造Vector的方式

**new Vector(p1: ICoord, p2: ICoord)**

**Vector.of(p: ICoord)**

```typescript
import {Vector} from "wsp-toolkit";

const v = Vector.of({x: 10, y: 0});
const v1 = Vector.of({x: 0, y: 10});
const v2 = new Vector({x: 0, y: 3}, {x: 4, y: 0});
```

**instance.getLength()**

获取向量长度

```typescript
v1.getLength() // 10
v2.getLength() // 5
```

**instance.getAngle(v: Vector)**

获取旋转角度

```typescript
v.getAngle(v1) // 90
v1.getAngle(v) // -90
```

**instance.getScale(v: Vector)**

获取缩放比例

```typescript
import {Vector} from "./Vector";

const v1 = Vector.of({x: 5, y: 0});
const v2 = Vector.of({x: 10, y: 0});
v1.getScale(v2); // 0.5
v2.getScale(v1); // 2
```

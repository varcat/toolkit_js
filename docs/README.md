# toolkit

Commonly used functions.

## Usage

```npm
npm i wsp-toolkit
```

```javascript
// script: js文件位于 /dist/umd/index.min.js
<script src="/dist/umd/index.min.js"></script>
window.toolkit.isExist('')

// esmodule
import { isExist } from "wsp-toolkit";

// node
const { typeOf } = require("wsp-toolkit");
```

## API

- [addition](#wsp-toolkit-addition)
- [and](#wsp-toolkit-and)
- [currying](#wsp-toolkit-currying)
- [debounce](#wsp-toolkit-debounce)
- [identity](#wsp-toolkit-identity)
- [isEmpty](#wsp-toolkit-isEmpty)
- [isExist](#wsp-toolkit-isExist)
- [isNumber](#wsp-toolkit-isNumber)
- [isSafeNumber](#wsp-toolkit-isSafeNumber)
- [notExist](#wsp-toolkit-notExist)
- [once](#wsp-toolkit-once)
- [or](#wsp-toolkit-or)
- [pipe](#wsp-toolkit-pipe)
- [sleep](#wsp-toolkit-sleep)
- [throttle](#wsp-toolkit-throttle)
- [toArray](#wsp-toolkit-toArray)
- [toNumber](#wsp-toolkit-toNumber)
- [typeOf](#wsp-toolkit-typeOf)
- [unique](#wsp-toolkit-unique)
- [Point](#wsp-toolkit-Point)
- [LinkedList](#wsp-toolkit-LinkedList)
- [Vector](#wsp-toolkit-Vector)

---

### <a id="wsp-toolkit-addition">addition</a>

```javascript
addition(1, 2, 3) // 6
addition([1, 2, 3, 4]) // 10
addition(1, 2, [7, 10]) // 20
```

### <a id="wsp-toolkit-and">and</a>

```javascript
and(1, 0) // false
and(1, 0 !== null) // true
```

### <a id="wsp-toolkit-currying">currying</a>
```typescript
function add(l: number, r: number): number {
  return l + r;
}
const curryFn = currying(add);
curryFn(1, 2) // 3
curryFn(1)(2) // 3
curryFn()(1)(2) // 3
```

### <a id="wsp-toolkit-debounce">debounce</a>
```typescript
interface IOpts {
  leading?: boolean; // default false
  trailing?: boolean; // default true
}
type debounce<T extends Function> = (func: T, wait: number, options?: IOpts) => T;
```

### <a id="wsp-toolkit-identity">identity</a>
```javascript
identity(null) // null
identity(1) // 1
identity({a: 1}) // {a: 1}
```

### <a id="wsp-toolkit-isEmpty">isEmpty</a>
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

### <a id="wsp-toolkit-isExist">isExist</a>
```javascript
isExist(null) // false
isExist(undefined) // false
isExist(0) // true
isExist('') // true
isExist([]) // true
isExist([1,2,3]) // true
```

### <a id="wsp-toolkit-isNumber">isNumber</a>
```javascript
isNumber(0) // true
isNumber(NaN) // true
isNumber(Infinity) // true
isNumber('0') // false
isNumber([]) // false
```

### <a id="wsp-toolkit-isSafeNumber">isSafeNumber</a>
```javascript
isSafeNumber(NaN) // false
isSafeNumber(Infinity) // false
isSafeNumber(0) // true
isSafeNumber(Number.MIN_SAFE_INTEGER) // true
isSafeNumber(Number.MAX_SAFE_INTEGER) // true
```

### <a id="wsp-toolkit-notExist">notExist</a>
```javascript
notExist(null) // true
notExist(undefined) // true
notExist(0) // false
notExist('') // false
notExist({}) // false
```

### <a id="wsp-toolkit-once">once</a>
```typescript
const arr: number[] = [];
function push(x: number) {
  arr.push(x)
}
const oncePush = once(push);
oncePush(1);
oncePush(2);
oncePush(3);
arr; // [1]
```

### <a id="wsp-toolkit-or">or</a>
```javascript
or(0, 1, false) // true
or(null, undefined, 0, "") // false
```

### <a id="wsp-toolkit-pipe">pipe</a>
```javascript
const res = pipe(
  (str: string, count: number) => str.repeat(count),
  (str: string) => str.toUpperCase()
)("a", 2);
res // "AA"
```

### <a id="wsp-toolkit-sleep">sleep</a>
```javascript
// do someting
await sleep(10_000); // wait for a timeout 10s
// do someting
```

### <a id="wsp-toolkit-throttle">throttle</a>
```typescript
interface IOpts {
  leading?: boolean; // default: false 开始时是否调用函数
  trailing?: boolean; // default: true 结束时是否调用函数
  maxWait?: number; // default: wait 为0则开始到结束之间的事件不调用函数
}
type debounce<T extends Function> = (func: T, wait: number, options?: IOpts) => T;
```

### <a id="wsp-toolkit-toArray">toArray</a>
```javascript
toArray('abc') // ['a', 'b', 'c']
toArray([]) // []
toArray(null) // []
toArray(undefined) // []
toArray({length: 2}) // [undefined, undefined]
toArray(document.querySelectorAll('div')) // NodeList: [div, div]
toArray(0) // [0]
toArray(false) // [false]
toArray(new Set([1, 2])) // [1, 2]
```

### <a id="wsp-toolkit-toNumber">toNumber</a>
```javascript
toNumber(100) // 100
toNumber('10,000') // 10000
toNumber('-870,123,001.20') // 870123001.2
toNumber(null) // 0
toNumber(null, {defaultValue: 100}) // 100
toNumber(NaN, {defaultValue: 100}) // 100
toNumber(0, {defaultValue: 100}) // 0
```

### <a id="wsp-toolkit-typeOf">typeOf</a>
```javascript
typeOf('') // String
typeOf(0) // Number
typeOf(NaN) // Number
typeOf(Infinity) // Number
typeOf(Symbol) // Function
typeOf(Symbol('wsp')) // Symbol
typeOf([]) // Array
typeOf({}) // Object
typeOf(new Map()) // Map
typeOf(new FormData()) // FormData
```

### <a id="wsp-toolkit-unique">unique</a>
```javascript
unique([1, 1, 3]) // [1, 3]

arr = [{id: 1}, {id: 2}, {id: 1}, {id: 2}];
unique(arr, 'id') // [{id: 1}, {id: 2}]

arr = [{info: {id: 1}}, {info: {id: 2}}, {info: {id: 3}}, {info: {id: 2}}];
unique(arr, x => x.info.id)
// [
//   {info: {id: 1}},
//   {info: {id: 2}},
//   {info: {id: 3}},
// ]
```

### <a id="wsp-toolkit-Point">Point</a>
```javascript

```

### <a id="wsp-toolkit-LinkedList">LinkedList</a>
```javascript

```

### <a id="wsp-toolkit-Vector">Vector</a>

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

# toolkit

Commonly used functions.

## Usage

```npm
npm i wsp-toolkit
```

```javascript
// browser
import { isExist } from "wsp-toolkit";

// script: js文件位于 /dist/umd/index.min.js
<script src="/dist/umd/index.min.js"></script>
window.toolkit.isExist('')

// node
const { typeOf } = require("wsp-toolkit");
```

## API

- [addition](#wsp-toolkit-addition)
- [and](#wsp-toolkit-and)
- [currying](#wsp-toolkit-currying)
- [identity](#wsp-toolkit-identity)
- [isEmpty](#wsp-toolkit-isEmpty)
- [isExist](#wsp-toolkit-isExist)
- [isNumber](#wsp-toolkit-isNumber)
- [isSafeNumber](#wsp-toolkit-isSafeNumber)
- [or](#wsp-toolkit-or)
- [pipe](#wsp-toolkit-pipe)
- [sleep](#wsp-toolkit-sleep)
- [toArray](#wsp-toolkit-toArray)
- [toNumber](#wsp-toolkit-toNumber)
- [typeOf](#wsp-toolkit-typeOf)
- [unique](#wsp-toolkit-unique)
- [LinkedList](#wsp-toolkit-LinkedList)

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

### <a id="wsp-toolkit-LinkedList">LinkedList</a>
```javascript

```

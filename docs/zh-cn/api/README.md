# API <!-- {docsify-ignore} -->

## addition
将给定多维数字数组进行合计，非数字会调用[toNumber](#toNumber)尝试转换
```javascript
addition(1, 2, 3) // 6
addition([1, 2, 3, 4]) // 10
addition(1, 2, [7, 10]) // 20
addition([1, 2], [[7, 10]]) // 20
```

## and

```javascript
and(1, 0) // false
and(1, 0 !== null) // true
```

## currying
柯里化：把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下的参数且返回结果的新函数
```typescript
function add(l: number, r: number): number {
  return l + r;
}

const curryAdd = currying(add);
curryAdd(1, 2) // 3
curryAdd(1)(2) // 3
curryAdd()(1)(2) // 3
```

## debounce
防抖：
```typescript
interface IOpts {
  leading?: boolean; // default: false 开始时是否调用函数
  trailing?: boolean; // default: true 结束时是否调用函数
}
type debounce<T extends Function> = (
    // 需要防抖的函数
    func: T,

    // 防抖时间
    wait: number,

    // 额外配置，参见上方 IOpts
    options?: IOpts
) => T;
```

## identity

返回入参

```javascript
identity(null) // null
identity(1) // 1
identity({a: 1}) // {a: 1}
```

## isEmpty

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

## isExist

判断入参是否存在，仅`null || undefined`为`false`(不存在)

```javascript
isExist(null) // false
isExist(undefined) // false
isExist(0) // true
isExist('') // true
isExist([]) // true
isExist([1,2,3]) // true
```

## isNumber
```javascript
isNumber(0) // true
isNumber(NaN) // true
isNumber(Infinity) // true
isNumber('0') // false
isNumber([]) // false
```

## isSafeNumber
```javascript
isSafeNumber(NaN) // false
isSafeNumber(Infinity) // false
isSafeNumber(0) // true
isSafeNumber(Number.MIN_SAFE_INTEGER) // true
isSafeNumber(Number.MAX_SAFE_INTEGER) // true
```

## notExist
```javascript
notExist(null) // true
notExist(undefined) // true
notExist(0) // false
notExist('') // false
notExist({}) // false
```

## once

包装给定的入参函数，返回仅执行一次的函数

```typescript
const arr: number[] = [];
function push(x: number) {
  arr.push(x)
}
// 调用 oncePush 仅会触发一次
const oncePush = once(push);
oncePush(1);
oncePush(2);
oncePush(3);
arr; // [1]
```

## or

入参表达式或函数返回true，则or函数返回true，否则返回false

```javascript
or(0, 1, false) // true
or(null, undefined, 0, "") // false
or(() => false, undefined, 0, "") // false
```

## pipe

管道函数，js[管道运算符](https://es6.ruanyifeng.com/#docs/proposals#%E7%AE%A1%E9%81%93%E8%BF%90%E7%AE%97%E7%AC%A6)

```javascript
const res = pipe(
  (str: string, count: number) => str.repeat(count),
  (str: string) => str.toUpperCase()
)("a", 2);
res // "AA"
```

## sleep
```javascript
( async () => {
  // 其他代码
  await sleep(10_000); // 等待10s
  // 其他代码
})()
```

## throttle

节流函数

```typescript
interface IOpts {
  leading?: boolean; // default: false 开始时是否调用函数
  trailing?: boolean; // default: true 结束时是否调用函数
  maxWait?: number; // default: wait 为0则开始到结束之间的事件不调用函数
}
type debounce<T extends Function> = (
    // 需要节流的函数
    func: T,

    // 节流时间
    wait: number,

    // 额外配置参见 IOpts
    options?: IOpts
) => T;
```

## toArray
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

## <a id="wsp-toolkit-toNumber">toNumber</a>
```javascript
toNumber(100) // 100
toNumber('10,000') // 10000
toNumber('-870,123,001.20') // 870123001.2
toNumber(null) // 0
toNumber(null, {defaultValue: 100}) // 100
toNumber(NaN, {defaultValue: 100}) // 100
toNumber(0, {defaultValue: 100}) // 0
```

## <a id="wsp-toolkit-typeOf">typeOf</a>
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

## <a id="wsp-toolkit-unique">unique</a>
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

## <a id="wsp-toolkit-Point">Point</a>
```javascript

```

## <a id="wsp-toolkit-LinkedList">LinkedList</a>
```javascript

```

## <a id="wsp-toolkit-Vector">Vector</a>

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

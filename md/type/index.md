# types

## AnyFn

<<< @/src/type/types.ts#AnyFn

## Head

获取第一个类型

<<< @/src/type/types.ts#Head

```ts
Head<[number, string]>; // number
```

## Tail

获取剩余类型

<<< @/src/type/types.ts#Tail

```ts
Tail<[number, string, boolean]>; // [string, boolean]
```

## Last

获取最后一个类型

<<< @/src/type/types.ts#Last

```ts
Last<[string, number]>; // number
```

## HasTail

是否还有剩余参数

<<< @/src/type/types.ts#HasTail

```ts
HasTail<[]>; // false
HasTail<[number]>; // false
HasTail<[number, string]>; // true
```

## Length

<<< @/src/type/types.ts#Length

## Prepend

元组顶部添加一个类型

<<< @/src/type/types.ts#Prepend

```ts
Prepend<number, [string, boolean]>; // [number, string, boolean]
```

## Drop

丢弃元组前 N 个类型

<<< @/src/type/types.ts#Drop

```ts
Drop<2, [0, 1, 2]>; // [2]
```

## Cast

X 是 Y 的子集则校验类型为 X，否则使用 Y 类型校验

<<< @/src/type/types.ts#Cast

## Iterator

创建位于`Index`定义位置的迭代器，可选通过使用`From`从另一个迭代器的位置开始

<<< @/src/type/types.ts#Iterator

```ts
type iterator1 = Iterator<2>; // [any, any]
Iterator<1, iterator1>; // [any, any, any]
```

## Pos

查询迭代器位置

<<< @/src/type/types.ts#Pos

```ts
Pos<[0, 0]>; // 2
Post<Iterator<5>>; // 5
```

## Next

迭代器+1

<<< @/src/type/types.ts#Next

```ts
Next<Iterator<0>>; // [any]
```

## Prev

迭代器-1

<<< @/src/type/types.ts#Prev

```ts
Prev<Iterator<2>>; // [any]
```

## Append

追加元组条目

<<< @/src/type/types.ts#Append

```ts
type xs1 = [0, 1];
Append<2, xs1>; // [0, 1, 2]
```

## Reverse

反转元组

<<< @/src/type/types.ts#Reverse

```ts
Reverse<[0, 1, 2]>; // [2, 1, 0]
```

## Concat

<<< @/src/type/types.ts#Concat

```ts
Concat<string, 0>; // [string, 0]
Concat<0, [1, 2]>; // [0, 1, 2]
Concat<[3, 4], 5>; // [3, 4, 5]
```

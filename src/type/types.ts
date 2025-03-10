// #region AnyFn
export type AnyFn = (...args: any[]) => any;
// #endregion AnyFn

// #region Head
export type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;
// #endregion Head

// #region HasTail
export type HasTail<T extends any[]> = T extends [] | [any] ? false : true;
// #endregion HasTail

// #region Last
export type Last<T extends any[]> = {
  0: Last<Tail<T>>;
  1: Head<T>;
}[HasTail<T> extends true ? 0 : 1];
// #endregion Last

// #region Tail
export type Tail<T extends any[]> = T extends [any, ...infer Rest] ? Rest : [];
// #endregion Tail

// #region Length
export type Length<T extends any[]> = T["length"];
// #endregion Length

// #region Prepend
export type Prepend<E, T extends any[]> = [E] extends [never] ? T : [E, ...T];
// #endregion Prepend

// #region Drop
export type Drop<N extends number, T extends any[], I extends any[] = []> = {
  0: Drop<N, Tail<T>, Prepend<any, I>>;
  1: T;
}[Length<I> extends N ? 1 : 0];
// #endregion Drop

// #region Cast
export type Cast<X, Y> = X extends Y ? X : Y;
// #endregion Cast

// #region Pos
export type Pos<I extends any[]> = Length<I>;
// #endregion Pos

// #region Next
export type Next<I extends any[]> = Prepend<any, I>;
// #endregion Next

// #region Prev
export type Prev<I extends any[]> = Tail<I>;
// #endregion Prev

// #region Iterator
export type Iterator<
  Index extends number = 0,
  From extends any[] = [],
  I extends any[] = []
> = {
  0: Iterator<Index, Next<From>, Next<I>>;
  1: From;
}[Pos<I> extends Index ? 1 : 0];
// #endregion Iterator

// #region Reverse
export type Reverse<
  T extends any[],
  R extends any[] = [],
  I extends any[] = []
> = {
  0: Reverse<T, Prepend<T[Pos<I>], R>, Next<I>>;
  1: R;
}[Length<T> extends Pos<I> ? 1 : 0];
// #endregion Reverse

// #region Concat
export type Concat<T, U> = T extends any[]
  ? U extends any[]
    ? [...T, ...U]
    : [...T, U]
  : U extends any[]
  ? [T, ...U]
  : [T, U];
// #endregion Concat

// #region Append
export type Append<E, T extends any[]> = Concat<T, E>;
// #endregion Append

export function mergeObjects<T extends object[]>(...objects: T): {
  [K in keyof UnionToIntersection<T[number]>]: UnionToIntersection<T[number]>[K]
} {
  const result: any = {};
  for (const obj of objects) {
    Object.assign(result, obj);
  }
  return result as any;
}

// 辅助类型：将并集类型转换为交叉类型
type UnionToIntersection<U> = 
  (U extends any ? (k: U) => void : never) extends 
  (k: infer I) => void ? I : never;
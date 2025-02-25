import type { Point } from "../../type/Point";

function pointSub(a: Point, b: Point): Point {
  return {
    x: a.x - b.x,
    y: a.y - b.y,
  };
}

function getLength(v: Vector) {
  const x = Math.abs(v.x);
  const y = Math.abs(v.y);
  return Math.sqrt(x * x + y * y);
}

function getDirection(v1: Vector, v2: Vector): -1 | 0 | 1 {
  const res = v1.x * v2.y - v2.x * v1.y;
  if (res === 0) return 0;
  return res > 0 ? 1 : -1;
}

function getAngle(v1: Vector, v2: Vector) {
  const direction = getDirection(v1, v2);
  const len1 = v1.getLength();
  const len2 = v2.getLength();
  const mr = len1 * len2;
  if (mr === 0) return 0;
  const dot = v1.x * v2.x + v1.y * v2.y;
  let r = dot / mr;
  if (r > 1) r = 1;
  if (r < -1) r = -1;
  const res = (Math.acos(r) * direction * 180) / Math.PI;
  return res === 0 ? 0 : res;
}

function getScale(v1: Vector, v2: Vector): number {
  return v2.getLength() / v1.getLength();
}

export class Vector {
  x: number = 0;
  y: number = 0;

  constructor(a: Point, b?: Point) {
    if (!a) {
      return;
    }
    b = b || { x: 0, y: 0 };
    const { x, y } = pointSub(a, b);
    this.x = x;
    this.y = y;
  }

  static of(a: Point, b?: Point) {
    return new Vector(a, b);
  }
  // 获取向量模
  getLength() {
    return getLength(this);
  }

  // 获取旋转角度
  getAngle(vector: Vector) {
    return getAngle(this, vector);
  }

  // 获取旋转方向
  getDirection(vector: Vector): 1 | 0 | -1 {
    return getDirection(this, vector);
  }

  // 获取缩放比例
  getScale(vector: Vector): number {
    return getScale(this, vector);
  }
}

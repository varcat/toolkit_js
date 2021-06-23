import { Point } from "./Point";
import { ICoord, pointSub } from "./internal/coordHelper";

export class Vector {
  x: number;
  y: number;

  constructor(p1?: Point, p2?: Point) {
    if (!(p1 && p2)) {
      this.x = 0;
      this.y = 0;
      return;
    }
    const { x, y } = pointSub(p1, p2);
    this.x = x;
    this.y = y;
  }

  static of(vector: ICoord) {
    const v = new Vector();
    v.x = vector.x;
    v.y = vector.y;
    return v;
  }

  getLength() {
    const x = Math.abs(this.x);
    const y = Math.abs(this.y);
    return Math.sqrt(x * x + y * y);
  }

  getAngle(vector: Vector) {
    const direction = this.getDirection(vector);
    const len1 = this.getLength();
    const len2 = vector.getLength();
    const mr = len1 * len2;
    let dot, r;
    if (mr === 0) return 0;
    dot = this.x * vector.x + this.y * vector.y;
    r = dot / mr;
    if (r > 1) r = 1;
    if (r < -1) r = -1;
    return (Math.acos(r) * direction * 180) / Math.PI;
  }

  getDirection(vector: Vector): 1 | -1 {
    // 判断方向 1:顺时针 -1:逆时针
    return this.x * vector.y - vector.x * this.y > 0 ? 1 : -1;
  }

  getScale(vector: Vector): number {
    return vector.getLength() / this.getLength();
  }
}

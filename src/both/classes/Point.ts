import { pointAdd } from "../functions/pointAdd";
import { pointSub } from "../functions/pointSub";
import { Vector } from "./Vector";

export class Point {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  sub(p: Point) {
    const { x, y } = pointSub(this, p);
    this.x = x;
    this.y = y;
    return this;
  }

  add(p: Point) {
    const { x, y } = pointAdd(this, p);
    this.x = x;
    this.y = y;
    return this;
  }
  toVector(point?: Point): Vector {
    if (point) {
      return new Vector(this, point);
    }
    return Vector.of(this);
  }
}

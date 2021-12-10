import { pointAdd } from "../functions";
import { pointSub } from "../functions";
import { Vector } from "./Vector/Vector";

export class Point {
  constructor(public x: number = 0, public y: number = 0) {}

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

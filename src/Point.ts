import { pointAdd } from "./coordinateHelper/pointAdd";
import { pointSub } from "./coordinateHelper/pointSub";

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
}

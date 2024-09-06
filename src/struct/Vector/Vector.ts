import type { ICoord } from "../../interface/ICoord";
import {
  getVectorLength,
  getRotateAngle,
  getRotateDirection,
  pointSub,
} from "../../functions";

export class Vector {
  x: number = 0;
  y: number = 0;

  constructor(point1?: ICoord, point2?: ICoord) {
    if (!(point1 && point2)) {
      return;
    }
    const { x, y } = pointSub(point1, point2);
    this.x = x;
    this.y = y;
  }

  static of(vector: ICoord) {
    const v = new Vector();
    v.x = vector.x;
    v.y = vector.y;
    return v;
  }
  static getLength() {}

  getLength() {
    return getVectorLength(this);
  }

  getAngle(vector: Vector) {
    return getRotateAngle(this, vector);
  }

  getDirection(vector: ICoord): 1 | -1 {
    return getRotateDirection(this, vector);
  }

  getScale(vector: Vector): number {
    return vector.getLength() / this.getLength();
  }
}

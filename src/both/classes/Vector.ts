import { getRotateDirection } from "../functions/getRotateDirection/getRotateDirection";
import { ICoord } from "../interface/ICoord";
import { pointSub } from "../functions/pointSub";
import { getVectorLength } from "../functions/getVectorLength/getVectorLength";
import { getRotateAngle } from "../functions/getRotateAngle/getRotateAngle";

export class Vector {
  x: number;
  y: number;

  constructor(point1?: ICoord, point2?: ICoord) {
    if (!(point1 && point2)) {
      this.x = 0;
      this.y = 0;
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

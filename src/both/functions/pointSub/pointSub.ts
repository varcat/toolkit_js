import { ICoord } from "../../interface/ICoord";

export function pointSub(p1: ICoord, p2: ICoord): ICoord {
  return {
    x: p1.x - p2.x,
    y: p1.y - p2.y,
  };
}

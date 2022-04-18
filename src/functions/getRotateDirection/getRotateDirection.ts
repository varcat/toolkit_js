import type { ICoord } from "../../interface/ICoord";

// 判断旋转方向 1:顺时针 -1:逆时针
export function getRotateDirection(v1: ICoord, v2: ICoord): 1 | -1 {
  return v1.x * v2.y - v2.x * v1.y > 0 ? 1 : -1;
}

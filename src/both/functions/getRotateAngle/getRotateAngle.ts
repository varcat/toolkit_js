import { ICoord } from "../../interface/ICoord";
import { getRotateDirection } from "../getRotateDirection/getRotateDirection";
import { getVectorLength } from "../getVectorLength/getVectorLength";

export function getRotateAngle(v1: ICoord, v2: ICoord): number {
  const direction = getRotateDirection(v1, v2);
  const len1 = getVectorLength(v1);
  const len2 = getVectorLength(v2);
  const mr = len1 * len2;
  let dot, r;
  if (mr === 0) return 0;
  dot = v1.x * v2.x + v1.y * v2.y;
  r = dot / mr;
  if (r > 1) r = 1;
  if (r < -1) r = -1;
  const res = (Math.acos(r) * direction * 180) / Math.PI;
  return res === 0 ? 0 : res;
}

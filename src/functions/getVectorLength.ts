import { ICoord } from "../interface/ICoord";

export function getVectorLength(vector: ICoord): number {
  const x = Math.abs(vector.x);
  const y = Math.abs(vector.y);
  return Math.sqrt(x * x + y * y);
}

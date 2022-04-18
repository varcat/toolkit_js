import type { ICoord } from "../../interface/ICoord";
import type { IMovingDirection } from "../../interface/IMovingDirection";

export function getMovingDirection(
  startPoint: ICoord,
  endPoint: ICoord
): IMovingDirection {
  const xResult =
    startPoint.x > endPoint.x ? -1 : startPoint.x === endPoint.x ? 0 : 1;
  const yResult =
    startPoint.y > endPoint.y ? -1 : startPoint.y === endPoint.y ? 0 : 1;

  return {
    x: xResult,
    y: yResult,
  };
}

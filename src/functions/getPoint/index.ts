import type { Point } from "../../type/Point";

export function getPoint(event: TouchEvent, index: number): Point {
  return {
    x: event.touches[index].pageX,
    y: event.touches[index].pageY,
  };
}

import type { Point } from "../../interface/Point";

export function getPoint(event: TouchEvent, index: number): Point {
  return {
    x: event.touches[index].pageX,
    y: event.touches[index].pageY,
  };
}

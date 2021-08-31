export { addition } from "./addition";
export { isExist } from "./isExist";
export { isEmpty } from "./isEmpty";
export { toArray } from "./toArray";
export { typeOf } from "./typeOf";
export { identity } from "./identity";
export { toNumber } from "./toNumber";
export { isNumber } from "./isNumber";
export { isSafeNumber } from "./isSafeNumber";
export { unique } from "./unique";
export { currying } from "./currying";
export { sleep } from "./sleep";
export { pipe } from "./pipe";
export { or } from "./or";
export { and } from "./and";
export { debounce } from "./debounce";
export { throttle } from "./throttle";
export { once } from "./once";
export { notExist } from "./notExist";
export { get } from "./get/index";
export { isIterable } from "./isIterable/index";
export { iterative } from "./iterative/index";

export { LinkedList } from "./LinkedList";
export { Vector } from "./Vector";
export { Point } from "./Point";

export { getMovingDirection } from "./coordinateHelper/getMovingDirection";
export { getRotateAngle } from "./coordinateHelper/getRotateAngle";
export { getRotateDirection } from "./coordinateHelper/getRotateDirection";
export { getVectorLength } from "./coordinateHelper/getVectorLength";
export { matrixTo } from "./coordinateHelper/matrixTo";
export { pointAdd } from "./coordinateHelper/pointAdd";
export { pointSub } from "./coordinateHelper/pointSub";

import { ICoord as icoord } from "./interface/ICoord";
import { IMovingDirection as imovingdirection } from "./interface/IMovingDirection";

export type ICoord = icoord;
export type IMovingDirection = imovingdirection;

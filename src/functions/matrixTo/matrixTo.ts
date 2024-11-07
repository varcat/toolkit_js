// #region TTransformInfo
export type TTransformInfo = {
  // translate X轴偏移量
  x: number;
  // translate Y轴偏移量
  y: number;
  // scale 大小
  scale: number;
  // 旋转角度
  rotate: number;
};
// #endregion TTransformInfo

export function matrixTo(matrixStr: string): TTransformInfo {
  const arr = matrixStr
    .replace("matrix(", "")
    .replace(")", "")
    .split(",")
    .map((x) => Number(x));
  const cos = arr[0],
    sin = arr[1],
    tan = sin / cos,
    rotate = (Math.atan(tan) * 180) / Math.PI,
    scale = cos / Math.cos((Math.PI / 180) * rotate);

  return {
    x: arr[4],
    y: arr[5],
    scale,
    rotate,
  };
}

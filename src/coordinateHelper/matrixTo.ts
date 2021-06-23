export type TTransformInfo = {
  x: number;
  y: number;
  scale: number;
  rotate: number;
};

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

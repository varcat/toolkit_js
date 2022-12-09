import { plus } from "../../functions";

type TNumValue = number | string;
export class Num {
  static add(l: TNumValue, r: TNumValue) {
    return plus(l.toString(), r.toString());
  }
  static sub(l: TNumValue, r: TNumValue) {
    return plus(l.toString(), `-${r.toString()}`);
  }
  add() {}
}

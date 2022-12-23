import { plus } from "../../functions";
import { multipliedBy } from "../../functions/multipliedBy";

type TNumValue = number | string;
export class Num {
  static plus(l: TNumValue, r: TNumValue) {
    return plus(l.toString(), r.toString());
  }
  static minus(l: TNumValue, r: TNumValue) {
    return plus(l.toString(), `-${r.toString()}`);
  }
  static multipliedBy(l: TNumValue, r: TNumValue) {
    return multipliedBy(l.toString(), r.toString());
  }
  value: string;
  constructor(val: TNumValue) {
    this.value = val.toString();
  }
  plus(val: TNumValue) {
    this.value = Num.plus(this.value, val);
    return this;
  }
  minus(val: TNumValue) {
    this.value = Num.minus(this.value, val);
    return this;
  }
  multipliedBy(val: TNumValue) {
    this.value = Num.multipliedBy(this.value, val);
    return this;
  }
}

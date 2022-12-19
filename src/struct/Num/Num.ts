import { plus } from "../../functions";
import { multipliedBy } from "../../functions/multipliedBy";

type TNumValue = number | string;
export class Num {
  static add(l: TNumValue, r: TNumValue) {
    return plus(l.toString(), r.toString());
  }
  static subtract(l: TNumValue, r: TNumValue) {
    return plus(l.toString(), `-${r.toString()}`);
  }
  static multipliedBy(l: TNumValue, r: TNumValue) {
    return multipliedBy(l.toString(), r.toString());
  }
  value: string;
  constructor(val: TNumValue) {
    this.value = val.toString();
  }
  add(val: TNumValue) {
    this.value = Num.add(this.value, val);
    return this;
  }
  subtract(val: TNumValue) {
    this.value = Num.subtract(this.value, val);
    return this;
  }
  multipliedBy(val: TNumValue) {
    this.value = Num.multipliedBy(this.value, val);
    return this;
  }
}

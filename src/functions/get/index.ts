import { isEmpty } from "../isEmpty/isEmpty";
import { notExist } from "../notExist/notExist";
import { propStrToList } from "./propStrToList";
import { reduce } from "../reduce";

export function get(
  subject: any,
  props: string | Array<string | number>,
  defaultValue?: any
) {
  if (isEmpty(props) || notExist(subject)) return defaultValue ?? subject;
  if (typeof props === "string") {
    props = propStrToList(props);
  }
  return reduce(
    props,
    (res: any, key: string | number) => {
      if (notExist(res)) return defaultValue;
      return res[key];
    },
    subject
  );
}

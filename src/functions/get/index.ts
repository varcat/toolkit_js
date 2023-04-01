import { isEmpty } from "../isEmpty/isEmpty";
import { notExist } from "../notExist/notExist";
import { propStrToList } from "../../internal/propStrToList/propStrToList";
import { reduce } from "../reduce";
import { isExist } from "../isExist/isExist";

export function get(
  subject: any,
  props: string | Array<string | number>,
  defaultValue?: any
) {
  if (isEmpty(props) || notExist(subject)) return isExist(defaultValue) ? defaultValue : subject;
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

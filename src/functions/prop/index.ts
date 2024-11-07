import { propStrToList } from "../../internal/propStrToList/propStrToList";
import { curry } from "../curry/curry";
import { isNil } from "../isNil";

export const prop = curry(
  (
    props: string | symbol | number | Array<string | number | symbol>,
    subject: any
  ) => {
    if (typeof props === "string") {
      props = propStrToList(props);
    }
    if (!Array.isArray(props)) {
      props = [props];
    }

    return props.reduce((res: any, key: string | number | symbol) => {
      if (isNil(res)) return;
      return res[key];
    }, subject);
  }
);

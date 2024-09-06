import { notExist } from "../notExist/notExist";
import { propStrToList } from "../../internal/propStrToList/propStrToList";
import { reduce } from "../reduce";
import { curry } from "../curry/curry";

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
    return reduce(
      (res: any, key: string | number | symbol) => {
        if (notExist(res)) return;
        return res[key];
      },
      subject,
      props
    );
  }
);

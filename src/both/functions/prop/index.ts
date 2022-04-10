import { currying } from "../currying/currying";
import { get } from "../get";

export const prop = currying(
  (props: string | Array<string | number>, subject: any) => get(subject, props)
);

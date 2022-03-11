import { currying } from "../currying/currying";
import { get } from "../get";

export type Prop = (props: string | string[], subject: any) => any;
export const prop = currying<Prop>((props: any, subject: any) =>
  get(subject, props)
);

import { isEmpty } from "../isEmpty/isEmpty";
import { isExist } from "../isExist/isExist";
import { notExist } from "../notExist/notExist";

type Fn<T> = (
  item: T,
  index?: number,
  list?: T[],
  level?: number,
  parent?: T | null
) => T;

interface IOptions {
  childKey?: string;
  filterNull?: boolean;
  filterEmpty?: boolean;
  startLeaf?: boolean;
}

export function treeEach<T>(xs: T[], fn: Fn<T>, options?: IOptions): T[] {
  const {
    childKey = "children",
    filterNull = true,
    filterEmpty = true,
    startLeaf = false,
  } = options || {};
  if (!Array.isArray(xs)) return [];
  const each = (list: T[], level: number, parent: T | null): T[] => {
    return list.reduce((result, value, index, array) => {
      let children = isExist(value) ? (value as any)[childKey] : null;
      if (startLeaf && Array.isArray(children)) {
        children = each(children, level + 1, value);
      }
      const newItem = fn(value, index, array, level, parent);
      if (!startLeaf && Array.isArray(children)) {
        children = each(children, level + 1, value);
      }
      if (typeof newItem === 'object' && isExist(newItem)) {
        if (notExist(children) && filterNull) {
          // @ts-ignore
          Reflect.deleteProperty(newItem, childKey);
        } else if (isExist(children) && isEmpty(children) && filterEmpty) {
          // @ts-ignore
          Reflect.deleteProperty(newItem, childKey);
        } else {
          // @ts-ignore
          newItem[childKey] = children;
        }
      } else if (filterNull && notExist(newItem)) {
        return result;
      }
      result.push(newItem);
      return result;
    }, [] as T[]);
  };
  return each(xs, 0, null);
}

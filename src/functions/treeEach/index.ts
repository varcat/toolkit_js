import { isEmpty } from "../isEmpty/isEmpty";
import { isExist } from "../isExist/isExist";
import { isNil } from "../isNil";

interface ITree {
  [key: PropertyKey]: unknown;
}

// #region Fn
type Fn<T> = (
  // 当前元素
  item: T,
  index: number,
  list: T[],
  // 树层级，top从0开始
  level: number,
  // 父节点，level 0 时为null
  parent: T | null
) => T;
// #endregion Fn

// #region IOptions
interface IOptions<Key = string> {
  // 后代节点key，默认为 "children"
  childKey?: Key;
  // 是否过滤不存在的节点，过滤类型为 null | undefined
  filterNull?: boolean;
  // 是否过滤为空的节点
  filterEmpty?: boolean;
  // false表示从top开始遍历，true表示从叶节点遍历
  startLeaf?: boolean;
}
// #endregion IOptions

export function treeEach<T extends ITree, K extends keyof T>(
  xs: T[],
  fn: Fn<T>,
  options?: IOptions<K>
): T[] {
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
      if (typeof newItem === "object" && isExist(newItem)) {
        if (isNil(children) && filterNull) {
          Reflect.deleteProperty(newItem, childKey);
        } else if (isExist(children) && isEmpty(children) && filterEmpty) {
          Reflect.deleteProperty(newItem, childKey);
        } else {
          newItem[childKey] = children;
        }
      } else if (filterNull && isNil(newItem)) {
        return result;
      }
      result.push(newItem);
      return result;
    }, [] as T[]);
  };
  return each(xs, 0, null);
}

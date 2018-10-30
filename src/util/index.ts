/**
 * Beautiful log with colors and fonts
 * Suitable for chrome console display
 */
export const log = {
  suc: (_: any, ...args: any[]) => {
    console.log(`%c ${_}`, "color: #86d850;font-size:12px;font-weight:bold;", ...args);
  },
  info: (_: any, ...args: any[]) => {
    console.log(`%c ${_}`, "color: #27a8f2;font-size:12px;font-weight:bold;", ...args);
  },
  err: (_: any, ...args: any[]) => {
    console.log(`%c ${_}`, "color: red;font-size:12px;font-weight:bold;", ...args);
  },
};
/**
 * @计算属性
 * 返回过滤并排序后的数组items
 * @filterKey: 过滤器，用来模糊查询一个数组中的每个对象的每个字段
 *  1. 对数组items，使用filter方法，获取每一个item
 *  2. 对每一个item，使用Object.keys方法，获取键值组成的数组
 *  3. 对键值数组，使用some方法，迭代每个键名
 *  4. 对每个键名，代入到item对象，获取每个键值。
 *  5. 对每一个键值，使用indexOf方法，根据filterkey返回符合条件的数据
 *c
 * @sortKey:   用来排序的排序器
 */
export function baseFilter(items: any[], sortKey: any, filterKey: any): any[] {
  var filter = filterKey && filterKey.toLowerCase();
  var order = 1;
  var data = items;
  if (filter) {
    data = data.filter(function(item: any) {
      return Object.keys(item).some(function(key) {
        return (
          String(item[key])
            .toLowerCase()
            .indexOf(filter) > -1
        );
      });
    });
  }
  if (sortKey) {
    data = data.slice().sort(function(a: any, b: any) {
      a = a[sortKey];
      b = b[sortKey];
      return (a === b ? 0 : a > b ? 1 : -1) * order;
    });
  }
  return data;
}

/**
 * Convert keys of a Object to Array to display
 * @param item Object with keys and values
 */
export function ObjectKeysToArray(item: any): any[] {
  let ArrayOfKeys = Object.keys(item);
  return ArrayOfKeys;
}

/**
 * Convert keys of a Object to Array to display
 * @param item Object with keys and values
 */
export function LimitedObjectKeysToArray(item: any): any[] {
  let LimitedArrayOfKeys: any[] = [];
  Object.keys(item).map((key: any, index: any) => {
    if (index > 10) return;
    LimitedArrayOfKeys.push({ text: key, value: key });
  });
  return LimitedArrayOfKeys;
}

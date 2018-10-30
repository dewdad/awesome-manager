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

/**
 * Utility function to create a string array from keys of any object
 * @param o Object from any class with string typed keys
 */
export function stringArrayFromClassKeys<T extends object>(o: T): string[] {
  return Object.keys(o).reduce((res: any[], key: string) => {
    if (typeof o[key] === "string") res.push(key);
    return res;
  }, []);
}

export function objectArrayFromClassKeys<T extends object>(o: T): string[] {
  return Object.keys(o).reduce((res: any[], key: string) => {
    if (typeof o[key] === "object") res.push(key);
    return res;
  }, []);
}
export function objectFromClassKeys<T extends object>(o: T): T {
  return Object.keys(o).reduce((res: T, key: string) => {
    if (typeof o[key] === "object") res[key] = o[key];
    return res;
  }, Object.create(null));
}
/**
 * Utility function to create a K:V from a list of strings
 * @param o Array of string
 *
 * Usage:
 * classFromStringArray({name: "xxx"})  -> {name: name}
 */
export function classFromStringArray<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

/**
 * Utility function to create a K:V from a object with specific type of value
 * @param o Array of string
 *
 * Usage:
 * selectedDeepClone({}, "string") -> {name: ""}
 * selectedDeepClone({}, "object") -> {name: {...}}
 * selectedDeepClone({}, "undefined") -> {name: undefined}
 */
export function selectedDeepClone<T extends object, S extends string>(
  o: T,
  f: S,
): { [K in keyof T]: any } {
  return Object.keys(o).reduce((res, key) => {
    if (typeof o[key] === f) {
      res[key] = o[key];
    }
    return res;
  }, Object.create(null));
}

export function selectedDeepMining<T extends object, S extends string>(o: T, f: S): S[] {
  return Object.keys(o).reduce((res, key) => {
    if (typeof o[key] !== "object") {
      res.push(key);
    } else {
      res.push(selectedDeepMining(o[key], "object"));
    }
    return res;
  }, []);
}

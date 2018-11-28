/* tslint:disable:no-console */
import { map, find, filter, reduce } from "lodash/fp";
import Papa from "papaparse/papaparse.js";
import fs from "fs";
const stringify = require("csv-stringify");
/**
 * 美化命令行终端日志输出
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
 * 在指定目录下查找某扩展名的文件
 * @param {String} path 需要查找的目录
 * @param {String} ext  文件扩展名
 * @return {Array} 无扩展名的文件名数组
 */
export function getFilesByExtentionInDir(path: string, ext: string): string[] {
  let files = fs.readdirSync(path, "utf8")
  return files.reduce((res: string[], file) => {
    // FIXME extension name issue
    const match = new RegExp(`.*${ext}$`)
    const replace = new RegExp(`\.${ext}`)
    if (file.match(match)) {
      res.push(file.replace(replace, ""));
    }
    return res;
  }, [])
}

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
export function baseFilter(items: any[], sortKey: string, filterKey: string): any[] {
  var filter = filterKey && filterKey.toLowerCase();
  var order = 1;
  var data = items;
  data = lazyFilter(filter, data);
  data = lazySorter(sortKey, data, order);
  return data;
}

export function lazySorter(sortKey: string, data: any[], order: number) {
  if (sortKey) {
    data = data.slice().sort(sliceAndSort());
  }
  return data;

  function sliceAndSort(): (a: any, b: any) => number {
    return function (a: any, b: any) {
      a = a[sortKey];
      b = b[sortKey];
      return comparePairs(a, b);
    };
  }

  function comparePairs(a: any, b: any): number {
    const compareFirst = a > b ? 1 : -1;
    const compareSecond = a === b ? 0 : compareFirst;
    return compareSecond * order;
  }
}

/**
 * 1. 过滤
 * 2. 查找
 * 3. 转换
 * @param filter 
 * @param data 
 */
export function lazyFilter(filter: string, data: any[]) {
  // 1. 过滤
  if (filter) {
    return data.filter(function (item: any) {
      return find(item);
    });
  }
  // 2. 查找
  function find(item: any): any {
    return Object.keys(item).some(function (key) {
      return convert(item, key);
    });
  }
  // 3. 转换
  function convert(item: any, key: string): boolean {
    return (String(item[key])
      .toLowerCase()
      .indexOf(filter) > -1);
  }
}

export function lazyFilterFp(filter: string, data: any[]) {

}

/**
 * 讲对象的键值转化为数组
 * @param item Object with keys and values
 */
export function ObjectKeysToArray(item: any): any[] {
  return Object.keys(item);
}

/**
 * 将部分数据键值转化为数组
 * @param item Object with keys and values
 */
export function LimitedObjectKeysToArray(item: any): any[] {
  let LimitedArrayOfKeys: any[] = [];
  return Object.keys(item).reduce((res: any[], key: string, index: number) => {
    if (index > 8) return;
    res.push({ text: key, value: key });
    return res;
  }, []);
}

/**
 * 使用csv-stringify转数组为字符串
 * 保持字符串到指定文件
 * windows下如有文档编码显示错误，可在目录下设置schema.ini文件
 * @param {Array} data 需要到处的数据
 * @param {String} targetFilePath 目标文件地址
 */
export function GenerateCSV(data: any[], targetFilePath: string) {
  if (!Array.isArray(data)) return;
  stringify(
    data,
    {
      delimiter: ",",
      header: true,
      quoted: true,
      quotedEmpty: true,
    },
    function(_err: string, output: any) {
      _err && console.log(_err);
      console.log("Data to be written:");
      console.table(output);
      fs.writeFileSync(targetFilePath, output, "utf8");
      console.log(`Data written to ${targetFilePath}`);
    },
  );
}

/**
 * 使用文件空间上传文件对象
 * @param {String|Object} 文件对象
 * @return {Promise} 成功将返回一个results对象，其data属性为真正的数据数组
 **/
export const ImportCSV = async (file: any) => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: function(results: any) {
        log.info(results.data[0]);
        resolve(results.data);
      },
    });
  });
};

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function uncapitalizeFirstLetter(string: string) {
  return string.charAt(0).toLowerCase() + string.slice(1).toLowerCase();
}

export const kebab = (str: string) => {
  return (str || "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};


export const randomElement = (arr = []) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

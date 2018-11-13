/* tslint:disable:no-console */
import Papa from "papaparse/papaparse.js";
import fs from "fs";
import path from "path";
const stringify = require("csv-stringify");
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

/**
 * Using csv-stringify to convert a array to string
 * Save the string to a csv file with utf8 encoding
 * Note that if you are using windows, you may experience trouble
 * with encoding. Should you use schema.ini file to specify the csv
 * encoding.
 * @param inputData
 * @param datasourcePath
 */
export function GenerateCSV(inputData: any[], datasourcePath: string) {
  // const input = [ [ 'a', 'b', 'c', 'd' ],[ '1', '2', '3', '4' ] ];
  stringify(
    inputData,
    {
      delimiter: ",",
      header: true,
      quoted: true,
      quotedEmpty: true,
    },
    function(_err: string, output: any) {
      console.log("Data to be written:");
      console.log(output);
      fs.writeFileSync(datasourcePath, output, "utf8");
      console.log("File Name:");
      console.log(datasourcePath);
    },
  );
}

/**
 * Parse a file uploaded by html page
 * Return a Promise which resolve results as a object
 * results have a key [data] holding the real array
 */

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

export function getFilesByExtentionInDir(path: string, ext: string): any[] {
  const Docs: any = [];
  fs.readdir(path, (_, files) => {
    files.forEach((file: string) => {
      log.info(file);
      if (file.substring(file.length - ext.length) !== ext) return;
      // Regex Replacement:   ./    .doc     .json
      let keyName: string = file.replace(/(\.\/|\.doc|\.json|\.js|\.ts)/g, "");
      Docs.push(keyName);
    });
  });
  return Docs;
}

export const randomElement = (arr = []) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

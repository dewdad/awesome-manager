/* tslint:disable:no-console */
import { curry, pipe, map, keys } from "lodash/fp";
import { head, tail, mapKeys, findKey, mapValues } from "lodash";
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
export function getFilesByExtentionInDir({ path = "", ext = "" }): string[] {
  let files = fs.readdirSync(path, "utf8");
  return files.reduce((res: string[], file) => {
    // FIXME extension name issue
    const match = newFunction();
    const replace = new RegExp(`.${ext}`);
    if (file.match(match)) {
      res.push(file.replace(replace, ""));
    }
    return res;
  }, []);

  function newFunction() {
    return new RegExp(`.*${ext}$`);
  }
}

const getFilesFp = curry(getFilesByExtentionInDir);

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
export const baseFilter = (sortKey: string) => (filterKey: string) => (items: any[]): any[] => {
  var filter = filterKey && filterKey.toLowerCase();
  var order = 1;
  var data = items;
  data = lazyFilter(filter)(data);
  data = lazySorter(sortKey)(order)(data);
  return data;
};

/**
 * 对数组中每个对象，用某一个键名称进行排序
 * @param {String} sortKey 排序键名称
 * @param {Array} data 数据
 * @param {Number} order 排序方向
 */
export const lazySorter = (sortKey: string) => (order: number) => (data: any[]) => {
  return data.slice().sort(compareObjectValues(sortKey)(order));
};

/**
 * 比较对象中，每个键对应值的大小
 * @param key 排序键
 * @param order 排序方向
 * @return 通用比较函数
 */

export const compareObjectValues = (key: string) => (order: number) => {
  return (a, b) => comparePairs(a[key])(b[key])(order);
};

/**
 * 快速排序
 * 前数大于后数，为正。后数大于前数，为负。
 * 前数等于后数，为平。
 * @param a  前一元素
 * @param b  后一元素
 * @param order  顺序为1， 逆序为-1
 * @return number 0|1|-1
 */
export const comparePairs = a => b => (order: number): number => {
  const notEqualCompare = a > b ? 1 : -1;
  const equalCompare = a === b ? 0 : notEqualCompare;
  return equalCompare * order;
};

/**
 * 过滤  查找  转换
 * @param filter
 * @param data
 */
export const lazyFilter = (filter: string) => (data: any[]) => {
  return data.reduce((filteredData: any[], item: any) => {
    Object.keys(item).some(key => {
      if (checkStringMatch(item[key])(filter)) {
        filteredData.push(item);
        return true;
      }
    });
    return filteredData;
  }, []);
};

export const checkStringMatch = (test: string) => (filter: string): boolean => {
  return (
    String(test)
      .toLowerCase()
      .indexOf(filter) > -1
  );
};
/**
 * 讲对象的键值转化为数组
 * @param item Object with keys and values
 */
export const ObjectKeysToArray = (item: any): any[] => {
  return Object.keys(item);
};

/**
 * 将部分数据键值转化为数组
 * @param item Object with keys and values
 */
export const LimitedObjectKeysToArray = (item: any): any[] => {
  return Object.keys(item).reduce((res: any[], key: string, index: number) => {
    if (index > 8) return;
    res.push({ text: key, value: key });
    return res;
  }, []);
};

/**
 * 将数组中的元素对象的键名称进行翻译，结合i18n可以进行导入导出。
 * @param data 原始数组, [{ name: "zip"},...]
 * @param headers json对象，包含标题行翻译 { name: "姓名"}
 * @param reverse 如果反向查找,在json文件中通过键值查找键名
 * @return result 新数组, { "姓名": "zip"}
 * @example
 * import * as keysDef from "@/locales/cn.json"
 * const keysDef = JSON.parse(fs.readFileSync("cn.json").toString())
 */
export const deepCloneWithNewKeysBasic = (data: any[], keysDef: any, reverse?: boolean): any[] => {
  let result = [];
  data.forEach(item => {
    let newItem = {};
    keys(item).map(key => {
      let newKey: string;
      if (reverse) {
        newKey = Object.keys(keysDef).filter(k => keysDef[k] === key)[0];
      } else {
        newKey = keysDef[key];
      }
      newItem[newKey] = item[key];
    });
    result.push(newItem);
  });
  return result;
};

export const deepCloneWithNewKeys = ({ data = [], keysDef = {}, reverse = false }): any[] => {
  let result = [];
  data.forEach(item => {
    let newItem = {};
    if (reverse) {
      newItem = mapKeys(item, (_: string, k: string) => findKey(keysDef, v => v === k));
    } else {
      // 翻译键值为相应语言
      newItem = mapKeys(item, (_: string, k: string) => keysDef[k]);
      // 提取对象型键值的字段作为新的键值
      newItem = mapValues(newItem, (value: any) => {
        return typeof value === "object" ? value["name"] : value;
      });
    }
    result.push(newItem);
  });
  return result;
};

/**
 * 
 * @param content string to parse
 * @param fieldDefs object with i18n translation
 * @result string
 * @example
 * let re = changeCSVHeader("name,age\nxxx,yyy")({
 *   name: "姓名",
 *   age: "年龄"
 * })
 */
export const changeCSVHeader = (content: string) => (fieldDefs: any): string => {
  return pipe(
    (content: string) => content.split("\n"),
    (lines: string[]) => head(lines),
    (firstLine: string) => firstLine.split(","),
    map(fieldName => {
      fieldName = fieldName.replace(/\\/g, "");
      fieldName = fieldName.replace(/'/g, "");
      console.log(fieldName);
      return fieldDefs[fieldName.toString()];
    }),
    (fieldNames: string[]) => fieldNames.join(","),
  )(content);
};

export const getCSVData = (content: string): string => {
  return pipe(
    (content: string) => content.split("\n"),
    (lines: string[]) => tail(lines),
    (lines: string[]) => lines.join("\n"),
  )(content);
};

export const changeHeaderOfCSV = (targetFilePath: string) => (keysDef: any) => {
  const content = fs.readFileSync(targetFilePath, "utf8");
  console.log(content);
  const header = changeCSVHeader(content)(keysDef);
  const data = getCSVData(content);
  console.log(header);
  console.log(data);
  fs.writeFileSync(targetFilePath, header, { encoding: "utf-8", flag: "w" });
  fs.writeFileSync(targetFilePath, "\n", { encoding: "utf-8", flag: "a" });
  fs.writeFileSync(targetFilePath, data, { encoding: "utf-8", flag: "a" });
};
/**
 * 使用csv-stringify转数组为字符串
 * 保持字符串到指定文件
 * windows下如有文档编码显示错误，可在目录下设置schema.ini文件
 * @param {Array} data 需要到处的数据
 * @param {String} targetFilePath 目标文件地址
 */
export const GenerateCSV = ({
  data = [],
  targetFilePath = "",
  needTranslate = false,
  keysDef = {},
}) => {
  if (!Array.isArray(data)) {
    data = [data];
  }
  // 进行列标题转译
  if (needTranslate) data = deepCloneWithNewKeys({ data, keysDef, reverse: false });
  // 进行输出
  stringify(
    data,
    {
      delimiter: ",",
      header: true,
      quoted: true,
      quotedEmpty: true,
    },
    (_err: string, output: any) => {
      _err && console.log(_err);
      console.log("Data to be written:");
      console.log(output);
      fs.writeFileSync(targetFilePath, output, "utf8");
      console.log(`Data written to ${targetFilePath}`);
    },
  );
};

/**
 * 使用文件空间上传文件对象
 * @param {String|Object} file 文件对象
 * @param {String|Object} needTranslate 需要转移列标题
 * @param {String|Object} keysDef? 标题定义json文件
 * @return {Promise} 成功将返回一个results对象，其data属性为真正的数据数组
 **/
export const ImportCSV = async ({ file = {}, needTranslate = false, keysDef = {} }): Promise<any> =>
  new Promise((resolve, _) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: function(results: any) {
        // 开始转译
        let data;
        if (needTranslate) {
          data = deepCloneWithNewKeys({ data: results.data, keysDef, reverse: true });
        } else {
          data = results.data;
        }
        resolve(data);
      },
    });
  });

export const capitalizeFirstLetter = (message: string) => {
  return message.charAt(0).toUpperCase() + message.slice(1).toLowerCase();
};

export const uncapitalizeFirstLetter = (message: string) => {
  return message.charAt(0).toLowerCase() + message.slice(1).toLowerCase();
};

export const kebab = (message: string) => {
  return (message || "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

export const randomElement = (arr = []) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const slugify = (words: string) => {
  return pipe(
    (words: string) => words.split(" "),
    map(word => word.toLowerCase()),
    (words: string[]) => words.join("-"),
  )(words);
};

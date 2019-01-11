import {
  baseFilter,
  changeCSVHeader,
  slugify,
  translateHeaders,
  translateBody,
  translateHeadersLegancy,
} from "./index";

// 原始数据
const data = [
  {
    name: "xingwenju",
    age: 40,
    entity: {
      name: "MFA",
    },
  },
  {
    name: "wanglulu",
    age: 38,
  },
];
// 翻译键名，键值不变
const expectedData1 = [
  {
    姓名: "xingwenju",
    年龄: 40,
    单位: {
      name: "MFA",
    },
  },
  {
    姓名: "wanglulu",
    年龄: 38,
  },
];
// 翻译键名，键值统一为字符串
const expectedData2 = [
  {
    姓名: "xingwenju",
    年龄: 40,
    单位: "MFA",
  },
  {
    姓名: "wanglulu",
    年龄: 38,
  },
];
// 不翻译键名，键值统一为字符串
const expectedData3 = [
  {
    name: "xingwenju",
    age: 40,
    entity: "MFA",
  },
  {
    name: "wanglulu",
    age: 38,
  },
];
// 键名翻译的对照定义
const keysDef = {
  name: "姓名",
  age: "年龄",
  entity: "单位",
};

describe("Simple filter", () => {
  it("should filter and sort", () => {
    const filterdData = baseFilter("name")("w")(data);
    expect(filterdData).toHaveLength(2);
  });

  it("should slugify", () => {
    const re = slugify("Hello Xing");
    expect(re).toBe("hello-xing");
  });

  it("should change CSV Header from english to chinese", () => {
    const newHeader = changeCSVHeader( { header: "name,age", keysDef, reverse: false });
    expect(newHeader).toBe("姓名,年龄");
  });
  it("should change CSV Header from chinese to english", () => {
    const newHeader = changeCSVHeader( { header: "姓名,年龄", keysDef, reverse: true });
    expect(newHeader).toBe("name,age");
  });
});

describe("Simple i18n translater", () => {
  it("should clone with new keys basicly", () => {
    const result = translateHeadersLegancy(data, keysDef, false);
    expect(result).toEqual(expectedData1);
  });
  it("should clone with new keys basicly and reversely", () => {
    const result = translateHeadersLegancy(expectedData1, keysDef, true);
    expect(result).toEqual(data);
  });
  it("should clone with new keys", () => {
    let result = translateHeaders({ data, keysDef, reverse: false });
    result = translateBody({ data: result, onlyKeepStringValue: true });
    expect(result).toEqual(expectedData2);
  });
  it("should clone with new keys reversely", () => {
    const result = translateHeaders({ data: expectedData2, keysDef, reverse: true });
    expect(result).toEqual(expectedData3);
  });
});

import {
  filterExample,
  beautyExample,
  reduceExample,
  mapToExample,
  delayExample,
  scanExample,
} from "./reactive";

describe("Test rxjs operators", () => {
  it("filter operator with mostbeautiful", () => {
    const couples = beautyExample();
    expect(couples).toEqual(undefined);
  });
  it("filter operator with basic filter", () => {
    const filter = filterExample();
    expect(filter).toEqual(undefined);
  });
  it("mapTo operator with interval", () => {
    const mapTo = mapToExample();
    expect(mapTo).toEqual(undefined);
  });
  it("reduce operator", () => {
    const mapTo = reduceExample();
    expect(mapTo).toEqual(undefined);
  });
  it("scan operator", () => {
    const scan = scanExample();
    expect(scan).toEqual(undefined);
  });
  it("delay operator", () => {
    const delay = delayExample();
    expect(delay).toEqual(undefined);
  });
});

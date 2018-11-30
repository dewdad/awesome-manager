import {
  filterExample,
  beautyExample,
  reduceExample,
  mapToExample,
  delayExample,
  scanExample,
  pipeExample,
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

describe("Test rxjs pipe map", () => {
  it("map and take operator with mostbeautiful", () => {
    const piped = pipeExample();
    expect(piped).toEqual(undefined);
  });
});

import { createId } from "./tools";

describe("createId", () => {
  const arrList = [ { id: "m1" }, { id: "m2" }, { id: "m3" }];

  it("should return 'm1' when arrList is empty", () => {
    const expected = "m1";
    const result = createId([]);
    expect(result).toEqual(expected);
  });

  it("should return a string", () => {
    const result = createId(arrList);
    expect(typeof result).toBe("string");
  });

  it("should return a string with the correct format", () => {
    const expected = "m4";
    const result = createId(arrList);
    expect(result).toEqual(expected);
  });

})
import { add } from "./addString";

describe("Add String Numbers", () => {
  it("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return sum of string numbers", () => {
    expect(add("10, 20, 30")).toBe(60);
  });

  it("should not return wrong sum of string numbers", () => {
    expect(add("10, 20, 30")).not.toBe(40);
  });

  it("should return sum with new lines", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should return sum with different delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it("should throw error for negative numbers", () => {
    expect(() => add("-10, 20, -30")).toThrow("negative numbers not allowed -10, -30");
  });
});

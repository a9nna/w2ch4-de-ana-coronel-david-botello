import CodersArray from "./CodersArray.js";

describe("Given the CodersArray class", () => {
  describe("When it instance", () => {
    test("Then return an object with length property", () => {
      const expectedResult = { length: 0 };

      const result = new CodersArray();

      expect(result).toEqual(expectedResult);
    });
  });
});

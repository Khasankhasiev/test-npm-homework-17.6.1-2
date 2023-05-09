import { revertString } from "../../utils/revertString.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("home")).toBe("emoh"));
});

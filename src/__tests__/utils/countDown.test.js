import { countDown } from "../../utils/countDown.js";

describe("countDown", () => {
    it("should print count down from 3 to 1", () => {
      const spy = jest.spyOn(console, "log");
      countDown(5);
      expect(spy).toHaveBeenNthCalledWith(1, 5);
      expect(spy).toHaveBeenNthCalledWith(2, 4);
      expect(spy).toHaveBeenNthCalledWith(3, 3);
      expect(spy).toHaveBeenNthCalledWith(4, 2);
      expect(spy).toHaveBeenNthCalledWith(5, 1);
      spy.mockRestore();
    });
  
    it("should print count down from 1 to 1", () => {
      const spy = jest.spyOn(console, "log");
      countDown(1);
      expect(spy).toHaveBeenNthCalledWith(1, 1);
      spy.mockRestore();
    });
  });
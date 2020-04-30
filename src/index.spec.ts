import { run } from "./index";

describe("test", () => {
  it("run", () => {
    expect(run()).toEqual({ name: "hoge" });
  });
});

import { selectRemoteStatus } from "./selector";

describe("Selector", () => {
  it("returns remote status from state", () => {
    const state = { isRemote: true };

    expect(selectRemoteStatus(state)).toBe(true);
  });
});

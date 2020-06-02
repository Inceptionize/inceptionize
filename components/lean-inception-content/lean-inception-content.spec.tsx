import React from "react";
import { render, cleanup } from "@testing-library/react";
import LeanInceptionContent from "./";
import { AppContext } from "../context/app-context";

describe("LeanInceptionContent", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("renders on-premise checklist", () => {
    const { getByText } = render(
      <AppContext.Provider value={{ state: { remote: { isRemote: false } }, dispatch: jest.fn() }}>
        <LeanInceptionContent />
      </AppContext.Provider>
    );

    expect(getByText("Pre-work for the workshop")).toBeInTheDocument();
  });

  it("renders remote checklist when remote context is true", () => {
    const { getByText } = render(
      <AppContext.Provider value={{ state: { remote: { isRemote: true } }, dispatch: jest.fn() }}>
        <LeanInceptionContent />
      </AppContext.Provider>
    );

    expect(getByText("Pre-work for the remote workshop")).toBeInTheDocument();
  });
});

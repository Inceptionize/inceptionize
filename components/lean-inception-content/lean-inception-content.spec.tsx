import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LeanInceptionContent from "./";

describe("LeanInceptionContent", () => {
  const RemoteContext = React.createContext({ isRemote: false });
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("renders on-premise checklist", () => {
    const { getByText } = render(
      <RemoteContext.Provider value={{ isRemote: false }}>
        <LeanInceptionContent />
      </RemoteContext.Provider>
    );

    expect(getByText("On-premise checklist")).toBeInTheDocument();
  });

  it("renders remote checklist when remote context is true", () => {
    const { getByText } = render(
      <RemoteContext.Provider value={{ isRemote: true }}>
        <LeanInceptionContent />
      </RemoteContext.Provider>
    );

    expect(getByText("Remote checklist")).toBeInTheDocument();
  });
});

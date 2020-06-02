import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LeanInceptionContent from "./";
import RemoteContext from "../remote/remotecontext";

describe("LeanInceptionContent", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("renders on-premise checklist", () => {
    const { getByText } = render(
      <RemoteContext.Provider value={{ isRemote: false, setRemoteness: undefined }}>
        <LeanInceptionContent />
      </RemoteContext.Provider>
    );

    expect(getByText("On-premise checklist")).toBeInTheDocument();
  });

  it("renders remote checklist when remote context is true", () => {
    const { getByText } = render(
      <RemoteContext.Provider value={{ isRemote: true, setRemoteness: undefined }}>
        <LeanInceptionContent />
      </RemoteContext.Provider>
    );

    expect(getByText("Remote checklist")).toBeInTheDocument();
  });
});

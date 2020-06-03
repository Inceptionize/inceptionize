import React from "react";
import { render, cleanup } from "@testing-library/react";
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

    expect(getByText("Pre-work for the workshop")).toBeInTheDocument();
  });

  it("renders remote checklist when remote context is true", () => {
    const { getByText } = render(
      <RemoteContext.Provider value={{ isRemote: true, setRemoteness: undefined }}>
        <LeanInceptionContent />
      </RemoteContext.Provider>
    );

    expect(getByText("Pre-work for the remote workshop")).toBeInTheDocument();
  });
});

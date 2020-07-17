import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import LeanInceptionContent from "./";
import { AppContext } from "../context/app-context";
import Router from "next/router";

jest.mock("react-ga");
const pushed = jest.fn();
const mockedRouter = {
  push: (path: string): Promise<void> => {
    pushed(path);
    return new Promise((resolve) => resolve());
  },
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Router.router = mockedRouter as any;

describe("LeanInceptionContent", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("renders on-premise checklist", () => {
    const { getByText } = render(
      <AppContext.Provider value={{ state: { isRemote: false }, dispatch: jest.fn() }}>
        <LeanInceptionContent />
      </AppContext.Provider>
    );

    expect(getByText("Pre-work for the workshop")).toBeInTheDocument();
  });

  it("renders remote checklist when remote context is true", () => {
    const { getByText } = render(
      <AppContext.Provider value={{ state: { isRemote: true }, dispatch: jest.fn() }}>
        <LeanInceptionContent />
      </AppContext.Provider>
    );

    expect(getByText("Pre-work for the remote workshop")).toBeInTheDocument();
  });

  it("redirect to coming soon page when create agenda button clicked", async () => {
    const { getByText } = render(
      <AppContext.Provider value={{ state: { isRemote: false }, dispatch: jest.fn() }}>
        <LeanInceptionContent />
      </AppContext.Provider>
    );

    const AgendaButton = getByText("Create Agenda");

    await fireEvent.click(AgendaButton);

    expect(pushed).toHaveBeenCalledWith("/agenda");
  });

  it("renders activities description", () => {
    const { queryAllByTestId } = render(
      <AppContext.Provider value={{ state: { isRemote: false }, dispatch: jest.fn() }}>
        <LeanInceptionContent />
      </AppContext.Provider>
    );

    expect(queryAllByTestId("activities-overview").length).toBe(1);
  });
});

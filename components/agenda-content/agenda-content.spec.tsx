import React from "react";
import { render, cleanup } from "@testing-library/react";
import { AppContext } from "../context/app-context";
import AgendaContent from ".";

describe("AgendaContent", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("does not render activities description", () => {
    const { queryAllByTestId } = render(
      <AppContext.Provider
        value={{ state: { isRemote: false, toggles: { isActivitiesVisible: false } }, dispatch: jest.fn() }}
      >
        <AgendaContent />
      </AppContext.Provider>
    );

    expect(queryAllByTestId("activities-overview").length).toBe(0);
  });

  it("renders activities description", () => {
    const { queryAllByTestId } = render(
      <AppContext.Provider
        value={{ state: { isRemote: false, toggles: { isActivitiesVisible: true } }, dispatch: jest.fn() }}
      >
        <AgendaContent />
      </AppContext.Provider>
    );

    expect(queryAllByTestId("activities-overview").length).toBe(1);
  });
});

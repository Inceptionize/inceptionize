import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import OutcomeChoice from ".";
import Router from "next/router";
import * as buttonLabels from "./constants";

const pushed = jest.fn();
const mockedRouter = {
  push: (path: string): Promise<void> => {
    pushed(path);
    return new Promise((resolve) => resolve());
  },
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Router.router = mockedRouter as any;

describe("OutcomeChoice", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("renders", () => {
    const { getByText } = render(<OutcomeChoice />);

    expect(getByText(buttonLabels.MVP)).toBeInTheDocument();
    expect(getByText(buttonLabels.PROTOTYPE)).toBeInTheDocument();
    expect(getByText(buttonLabels.AGILE_TEAM)).toBeInTheDocument();
  });

  it("redirect to lean inception page when MVP button clicked", async () => {
    const { getByText } = render(<OutcomeChoice />);

    const MVPButton = getByText(buttonLabels.MVP);

    await fireEvent.click(MVPButton);

    expect(pushed).toHaveBeenCalledWith("/lean-inception");
  });

  it("redirect to design-sprint page when Prototype button clicked", async () => {
    const { getByText } = render(<OutcomeChoice />);

    const PrototypeButton = getByText(buttonLabels.PROTOTYPE);

    await fireEvent.click(PrototypeButton);

    expect(pushed).toHaveBeenCalledWith("/design-sprint");
  });

  it("redirect to agile-team page when Agile button clicked", async () => {
    const { getByText } = render(<OutcomeChoice />);

    const AgileTeamButton = getByText(buttonLabels.AGILE_TEAM);

    await fireEvent.click(AgileTeamButton);

    expect(pushed).toHaveBeenCalledWith("/agile-team");
  });
});

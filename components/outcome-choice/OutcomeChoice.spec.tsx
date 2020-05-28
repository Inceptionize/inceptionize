import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import OutcomeChoice from "./OutcomeChoice";
import Router from "next/router";

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

    expect(getByText("MVP")).toBeInTheDocument();
    expect(getByText("Prototype")).toBeInTheDocument();
    expect(getByText("Agile Team Setup")).toBeInTheDocument();
  });

  it("redirect to lean inception page when MVP button clicked", async () => {
    const { getByText } = render(<OutcomeChoice />);

    const MVPButton = getByText("MVP");

    await fireEvent.click(MVPButton);

    expect(pushed).toHaveBeenCalledWith("/lean-inception");
  });

  it("redirect to design-sprint page when Prototype button clicked", async () => {
    const { getByText } = render(<OutcomeChoice />);

    const PrototypeButton = getByText("Prototype");

    await fireEvent.click(PrototypeButton);

    expect(pushed).toHaveBeenCalledWith("/design-sprint");
  });

  it("redirect to agile-team page when Agile button clicked", async () => {
    const { getByText } = render(<OutcomeChoice />);

    const AgileTeamButton = getByText("Agile Team Setup");

    await fireEvent.click(AgileTeamButton);

    expect(pushed).toHaveBeenCalledWith("/agile-team");
  });
});

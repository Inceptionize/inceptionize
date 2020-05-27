import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InceptionChoice from "../pages/choice";
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

describe("InceptionChoice", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("renders", () => {
    const { getByText } = render(<InceptionChoice />);

    expect(getByText("What kind of inception are you planning?")).toBeInTheDocument();
    expect(getByText("Lean Inception")).toBeInTheDocument();
  });

  it("redirect to lean inception page when button clicked", async () => {
    const { getByText } = render(<InceptionChoice />);

    const LeanInceptionButton = getByText("Lean Inception");

    await fireEvent.click(LeanInceptionButton);

    expect(pushed).toHaveBeenCalledWith("/lean-inception");
  });

  it("redirect to design-sprint page when button clicked", async () => {
    const { getByText } = render(<InceptionChoice />);

    const DesignSprintButton = getByText("Design Sprint");

    await fireEvent.click(DesignSprintButton);

    expect(pushed).toHaveBeenCalledWith("/design-sprint");
  });

  it("redirect to agile-team page when button clicked", async () => {
    const { getByText } = render(<InceptionChoice />);

    const AgileTeamButton = getByText("Agile Team");

    await fireEvent.click(AgileTeamButton);

    expect(pushed).toHaveBeenCalledWith("/agile-team");
  });
});
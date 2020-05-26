import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InceptionChoice from "../pages/inception-choice";
import Router from "next/router";

const routerPushed = jest.fn();
const mockedRouter = {
  push: (path: string): Promise<void> => {
    routerPushed(path);
    return new Promise((resolve) => resolve());
  },
};
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

    expect(routerPushed).toHaveBeenCalledWith("/lean-inception");
  });
});

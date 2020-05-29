import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "../pages/index";
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

describe("HomePage", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);
  it("renders welcome message text", () => {
    const { getByText } = render(<HomePage />);

    expect(getByText("Inceptionize")).toBeInTheDocument();
  });

  it("redirects to choice page when start button clicked ", async () => {
    const { getByText } = render(<HomePage />);

    const StartButton = getByText("Get started");

    await fireEvent.click(StartButton);

    expect(pushed).toHaveBeenCalledWith("/choice");
  });
});

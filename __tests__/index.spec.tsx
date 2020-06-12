import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import HomePage from "../pages/index";
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

describe("HomePage", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("redirects to choice page when start button clicked ", async () => {
    const { getByText } = render(<HomePage />);

    const StartButton = getByText("Let's get started!");

    await fireEvent.click(StartButton);

    expect(pushed).toHaveBeenCalledWith("/remote");
  });
});

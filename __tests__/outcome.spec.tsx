import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Outcome from "../pages/outcome";
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

describe("Outcome", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("renders", () => {
    const { getByText } = render(<Outcome />);

    expect(getByText("What outcome do you expect from the inception?")).toBeInTheDocument();
  });

  describe("back button", () => {
    it("redirects to the previous choice page", async () => {
      const { getByAltText } = render(<Outcome />);

      const PreviousButton = getByAltText("Previous step");

      await fireEvent.click(PreviousButton);

      expect(pushed).toHaveBeenCalledWith("/choice");
    });
  });
});

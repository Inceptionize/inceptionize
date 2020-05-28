import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Remote from "../pages/remote";
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

describe("Remote", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("renders", () => {
    const { getByText } = render(<Remote />);

    expect(getByText("Is your inception remote or on-premise?")).toBeInTheDocument();
    expect(getByText("Remote")).toBeInTheDocument();
    expect(getByText("On-premise")).toBeInTheDocument();
  });

  it("redirect to inception choice page when remote button clicked", async () => {
    const { getByText } = render(<Remote />);

    const RemoteButton = getByText("Remote");

    await fireEvent.click(RemoteButton);

    expect(pushed).toHaveBeenCalledWith("/choice");
  });

  it("redirect to inception choice page when on-premise button clicked", async () => {
    const { getByText } = render(<Remote />);

    const RemoteButton = getByText("On-premise");

    await fireEvent.click(RemoteButton);

    expect(pushed).toHaveBeenCalledWith("/choice");
  });
});

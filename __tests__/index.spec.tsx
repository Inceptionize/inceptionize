import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "../pages/index";

describe("HomePage", () => {
  afterEach(cleanup);

  it("renders welcome message text", () => {
    const { getByText } = render(<HomePage />);

    expect(getByText("Inceptionize! Coming Soon...")).toBeInTheDocument();
  });
});

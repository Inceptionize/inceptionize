import React from "react";
import { render, cleanup } from "@testing-library/react";
import Outcome from "../pages/outcome";

describe("Outcome", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("renders", () => {
    const { getByText } = render(<Outcome />);

    expect(getByText("What outcome do you expect from the inception?")).toBeInTheDocument();
  });
});

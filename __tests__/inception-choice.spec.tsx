import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InceptionChoice from "../pages/inception-choice";

describe("InceptionChoice", () => {
  afterEach(cleanup);
  it("renders", () => {
    const { getByText } = render(<InceptionChoice />);

    expect(getByText("What kind of inception are you planning?")).toBeInTheDocument();
    expect(getByText("Lean Inception")).toBeInTheDocument();
  });

  xit("redirect to lean inception page when button clicked", async () => {
    const { getByText } = render(<InceptionChoice />);

    const LeanInceptionButton = getByText("Lean Inception");

    await fireEvent.click(LeanInceptionButton);

    expect(getByText("Lean Inception Page")).toBeInTheDocument();
  });
});

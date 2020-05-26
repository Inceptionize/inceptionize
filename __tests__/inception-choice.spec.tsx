import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InceptionChoice from "../pages/inception-choice";

describe("InceptionChoice", () => {
  afterEach(cleanup);
  it("renders", () => {
    const { getByText } = render(<InceptionChoice />);

    expect(getByText("What kind of inception are you planning?")).toBeInTheDocument();
  });
});

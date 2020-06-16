import React from "react";
import { render, cleanup } from "@testing-library/react";
import LeanInception from "../pages/index";

jest.mock("react-ga");

describe("LeanInception", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("initializes Google Analytics module", () => {
    render(<LeanInception />);
    expect(window.GA_INITIALIZED).toBe(true);
  });
});

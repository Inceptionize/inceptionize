import React from "react";
import { render, cleanup } from "@testing-library/react";
import DesignSprint from "../pages/index";

jest.mock("react-ga");

describe("DesignSprint", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("initializes Google Analytics module", () => {
    render(<DesignSprint />);
    expect(window.GA_INITIALIZED).toBe(true);
  });
});

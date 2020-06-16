import React from "react";
import { render, cleanup } from "@testing-library/react";
import AgileTeam from "../pages/index";

jest.mock("react-ga");

describe("AgileTeam", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("initializes Google Analytics module", () => {
    render(<AgileTeam />);
    expect(window.GA_INITIALIZED).toBe(true);
  });
});

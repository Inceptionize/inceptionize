import React from "react";
import { render, cleanup } from "@testing-library/react";
import AgendaContent from ".";

describe("AgendaContent", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("renders a calendar", () => {
    const { getByText } = render(<AgendaContent />);

    expect(getByText("Kick-off")).toHaveTextContent("Kick-off");
  });
});

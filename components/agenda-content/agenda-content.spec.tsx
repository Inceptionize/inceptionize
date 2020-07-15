import React from "react";
import { render, cleanup } from "@testing-library/react";
import AgendaContent from ".";

describe("AgendaContent", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("renders activities description", () => {
    const { queryAllByTestId } = render(<AgendaContent />);

    expect(queryAllByTestId("activities-overview").length).toBe(1);
  });
});

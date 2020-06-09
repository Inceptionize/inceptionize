import React from "react";
import { render, cleanup } from "@testing-library/react";
import NotFound from "../pages/404";

describe("NotFound", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("redirects to 404 page when non-existant route given", async () => {
    const { getByText } = render(<NotFound />);

    const ErrorText = getByText("This page is not found.");

    expect(ErrorText).toBeInTheDocument();
  });
});

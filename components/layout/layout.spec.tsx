import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Layout from "./";
import Router from "next/router";

const pushed = jest.fn();
const mockedRouter = {
  push: (path: string): Promise<void> => {
    pushed(path);
    return new Promise((resolve) => resolve());
  },
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Router.router = mockedRouter as any;

describe("Layout", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  describe("Header", () => {
    it("redicts to Home page when clicked on header", async () => {
      const dummyChildren = <></>;
      const { getByText } = render(<Layout>{dummyChildren}</Layout>);

      const InceptionizeHeaderText = getByText("Inceptionize!");

      await fireEvent.click(InceptionizeHeaderText);

      expect(pushed).toHaveBeenCalledWith("/");
    });
  });
});

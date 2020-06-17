import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import AgendaButton from "./";
import Router from "next/router";
import { logEvent } from "../../utils/google-analytics";

const pushed = jest.fn();
const mockedRouter = {
  push: (path: string): Promise<void> => {
    pushed(path);
    return new Promise((resolve) => resolve());
  },
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Router.router = mockedRouter as any;

describe("AgendaButton", () => {
  afterEach(cleanup);
  afterEach(jest.resetAllMocks);

  it("triggers logging GA event for creating agenda", async () => {
    const logEventMock = jest.fn() as jest.MockedFunction<typeof logEvent>;
    const { getByText } = render(
      <AgendaButton
        onClick={(): void => {
          logEventMock("User", "createdAgenda");
        }}
      ></AgendaButton>
    );

    const createAgendaButton = getByText("Create Agenda");

    await fireEvent.click(createAgendaButton);

    expect(logEventMock).toHaveBeenCalledWith("User", "createdAgenda");
  });
});

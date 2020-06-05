import { remoteStatusReducer, Action } from "./reducers";
import { AppState } from "../components/context/app-context";

describe("Reducers", () => {
  it("returns true", () => {
    const initialState: AppState = { isRemote: false };
    const action: Action = { type: "SET_REMOTE_STATUS", payload: { isRemote: true } };

    expect(remoteStatusReducer(initialState, action)).toEqual({ isRemote: true });
  });
  it("returns false", () => {
    const initialState: AppState = { isRemote: true };
    const action: Action = { type: "SET_REMOTE_STATUS", payload: { isRemote: false } };

    expect(remoteStatusReducer(initialState, action)).toEqual({ isRemote: false });
  });

  it("returns default when payload is null", () => {
    const initialState: AppState = { isRemote: true };
    const action: Action = { type: "SET_REMOTE_STATUS", payload: { isRemote: null } };

    expect(remoteStatusReducer(initialState, action)).toEqual({ isRemote: false });
  });
  it("returns default when action type is not recognised", () => {
    const initialState: AppState = { isRemote: false };
    const action: Action = { type: "NO_OP", payload: { isRemote: null } };

    expect(remoteStatusReducer(initialState, action)).toEqual({ isRemote: false });
  });
});

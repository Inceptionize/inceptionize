import { AppState } from "../components/context/app-context";

export type RemoteStatus = {
  isRemote: boolean;
};

export type Action = { type: string; payload: RemoteStatus };

export const remoteStatusReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "SET_REMOTE_STATUS":
      return { ...state, isRemote: action.payload.isRemote ?? false };
    default:
      return state;
  }
};

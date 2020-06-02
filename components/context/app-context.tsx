import React, { createContext, useReducer, ReactElement, ReactNode, Dispatch } from "react";
import { remoteStatusReducer, Action, RemoteStatusType } from "./reducers";

interface AppProviderProps {
  children: ReactNode;
}

export type AppState = {
  remote: RemoteStatusType;
};

const initialState = {
  remote: {
    isRemote: false,
  },
};

const AppContext = createContext<{ state: AppState; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

const reducer = ({ remote }: AppState, action: Action): AppState => ({
  remote: remoteStatusReducer(remote, action),
});

const AppContextProvider = ({ children }: AppProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };

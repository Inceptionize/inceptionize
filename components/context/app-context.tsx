import React, { createContext, useReducer, ReactElement, ReactNode } from "react";

interface AppProviderProps {
  children: ReactNode;
}

interface RemoteState {
  isRemote: boolean;
}

type AppState = RemoteState;

interface Action {
  type: string;
  payload: RemoteState;
}

const initialState = { isRemote: false };

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "SET_REMOTE_STATUS":
      return { ...state, isRemote: !state.isRemote };
    default:
      return state;
  }
};

const AppContext = createContext(initialState);

const AppContextProvider = ({ children }: AppProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { ...state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };

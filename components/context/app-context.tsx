import React, { createContext, useReducer, ReactElement, ReactNode, Dispatch } from "react";
import { remoteStatusReducer, Action } from "../../state/reducers";

interface AppProviderProps {
  children: ReactNode;
}

export type AppState = {
  isRemote: boolean;
};

const initialState = {
  isRemote: false,
};

const AppContext = createContext<{ state: AppState; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: AppState, action: Action): AppState => ({
  ...remoteStatusReducer(state, action),
});

const AppContextProvider = ({ children }: AppProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  //TODO can also do something like this for persisting state to local storage
  // useEffect(() => {
  //   persistState(state);
  // }, [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
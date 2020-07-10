import React, { createContext, useReducer, ReactElement, ReactNode, Dispatch } from "react";
import { remoteStatusReducer, Action } from "../../state/reducers";
import { ACTIVITIES_TOGGLE } from "../../feature-toggles/feature-toggles";

interface AppProviderProps {
  children: ReactNode;
}

export type Toggles = {
  isActivitiesVisible: boolean;
};

export type AppState = {
  isRemote: boolean;
  toggles?: Toggles;
};

const initialState = {
  isRemote: false,
  toggles: {
    isActivitiesVisible: ACTIVITIES_TOGGLE,
  },
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

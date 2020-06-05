import { AppState } from "../components/context/app-context";

export const selectRemoteStatus = (state: AppState): boolean => state.isRemote;

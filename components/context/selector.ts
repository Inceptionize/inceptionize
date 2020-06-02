import { AppState } from "./app-context";

export const selectRemoteStatus = (state: AppState): boolean => state?.remote?.isRemote ?? false;

import { AppState } from "../components/context/app-context";

export const selectRemoteStatus = (state: AppState): boolean => state.isRemote;

export const selectActivitiesVisible = (state: AppState): boolean => state.toggles["isActivitiesVisible"];

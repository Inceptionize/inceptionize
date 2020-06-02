export type RemoteStatusType = {
  isRemote: boolean;
};

export type Action = { type: "SET_REMOTE_STATUS"; payload: RemoteStatusType };

export const remoteStatusReducer = (state: RemoteStatusType, action: Action): RemoteStatusType => {
  switch (action.type) {
    case "SET_REMOTE_STATUS":
      return { ...state, isRemote: action.payload.isRemote };
    default:
      return state;
  }
};

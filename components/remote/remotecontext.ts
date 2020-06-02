import { createContext } from "react";

const RemoteContext = createContext({ isRemote: false, setRemoteness: undefined });

export default RemoteContext;

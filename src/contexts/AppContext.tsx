import { createContext } from "react";

interface AppContextPropsType {
  handleActiveTabState: (activeTab: string) => void;
}

export const AppContext = createContext<AppContextPropsType>({
  handleActiveTabState: () => {},
});

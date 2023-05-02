import { createContext } from "react";

interface AppContextPropsType {
  handleActiveTabState: (activeTab: string) => void;
  handleMenuOpenState: (nextState: boolean) => void,
  isMenuOpen: boolean,
}

export const AppContext = createContext<AppContextPropsType>({
  handleActiveTabState: () => {},
  handleMenuOpenState: () => {},
  isMenuOpen: false,
});

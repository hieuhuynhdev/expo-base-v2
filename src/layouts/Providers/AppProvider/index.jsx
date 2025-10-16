import { createContext } from "react";

// Context
export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

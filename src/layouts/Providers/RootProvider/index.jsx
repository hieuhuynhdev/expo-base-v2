import { AppProvider } from "../AppProvider";

export const RootProvider = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default RootProvider;

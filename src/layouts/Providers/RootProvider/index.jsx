import { AppProvider } from "../AppProvider";
import { ThemeProvider } from "../ThemeProvider";

export const RootProvider = ({ children }) => {
  return (
    <AppProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AppProvider>
  );
};

export default RootProvider;

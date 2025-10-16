import { TamaguiProvider, Theme } from "tamagui";
import tamaguiConfig from "../../../../tamagui.config";
import { useColorScheme } from "react-native";

export const ThemeProvider = ({ children }) => {
  const scheme = useColorScheme();
  const themeName = scheme === "dark" ? "dark" : "light";

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name={themeName}>{children}</Theme>
    </TamaguiProvider>
  );
};

export default ThemeProvider;

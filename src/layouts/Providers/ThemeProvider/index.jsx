import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui, TamaguiProvider } from "tamagui";

const config = createTamagui(defaultConfig);

export const ThemeProvider = ({ children }) => {
  <TamaguiProvider config={config}>{children}</TamaguiProvider>;
};

export default ThemeProvider;

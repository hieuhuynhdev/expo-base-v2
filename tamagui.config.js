import { createTamagui } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4";

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    color: {
      ...defaultConfig.tokens.color,
      red: { val: "#960606" },
      white: { val: "#FFFFFF" },
    },
  },
});

export default tamaguiConfig;

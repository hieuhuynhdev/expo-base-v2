import { createTamagui } from "tamagui";
import { defaultConfig as base } from "@tamagui/config/v4";
// import customThemes from './themes' 

export const tamaguiConfig = createTamagui({
  ...base,
});

export default tamaguiConfig;

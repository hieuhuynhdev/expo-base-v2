import { createTamagui } from "tamagui";
import { defaultConfig as base } from "@tamagui/config/v4";
import customThemes from "./themes";

const baseThemes = JSON.parse(JSON.stringify(base.themes));
const baseTokens = JSON.parse(JSON.stringify(base.tokens));
const themes = {
  ...baseThemes,
  ...customThemes,
};

const tamaguiConfig = createTamagui({
  tokens: baseTokens,
  themes,
  fonts: base.fonts,
  shorthands: base.shorthands,
  media: base.media,
  animations: base.animations,
});

export default tamaguiConfig;

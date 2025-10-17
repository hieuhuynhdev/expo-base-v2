import { defaultConfig as base } from "@tamagui/config/v4";
import { createTamagui } from "tamagui";
import customThemes from "./themes";

const baseThemes = JSON.parse(JSON.stringify(base.themes));
const baseTokens = JSON.parse(JSON.stringify(base.tokens));
baseTokens.color = {
  ...baseTokens.color,
  destructive: "#e03b3b",
  error: "#e03b3b",
  danger: "#e03b3b",
};

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

import * as Colors from "@tamagui/colors";
import { createThemes, defaultComponentThemes } from "@tamagui/theme-builder";

const darkPalette = [
  "hsla(0, 0%, 1%, 1)",
  "hsla(0, 0%, 10%, 1)",
  "hsla(0, 0%, 18%, 1)",
  "hsla(0, 0%, 27%, 1)",
  "hsla(0, 0%, 35%, 1)",
  "hsla(0, 0%, 44%, 1)",
  "hsla(0, 0%, 52%, 1)",
  "hsla(0, 0%, 61%, 1)",
  "hsla(0, 0%, 69%, 1)",
  "hsla(0, 0%, 78%, 1)",
  "hsla(0, 15%, 93%, 1)",
  "hsla(0, 60%, 99%, 1)",
];
const lightPalette = [
  "hsla(0, 0%, 99%, 1)",
  "hsla(0, 0%, 94%, 1)",
  "hsla(0, 0%, 89%, 1)",
  "hsla(0, 0%, 83%, 1)",
  "hsla(0, 0%, 78%, 1)",
  "hsla(0, 0%, 73%, 1)",
  "hsla(0, 0%, 68%, 1)",
  "hsla(0, 0%, 62%, 1)",
  "hsla(0, 0%, 57%, 1)",
  "hsla(0, 0%, 52%, 1)",
  "hsla(0, 15%, 15%, 1)",
  "hsla(0, 60%, 1%, 1)",
];

const lightShadows = {
  shadow1: "rgba(0,0,0,0.04)",
  shadow2: "rgba(0,0,0,0.08)",
  shadow3: "rgba(0,0,0,0.16)",
  shadow4: "rgba(0,0,0,0.24)",
  shadow5: "rgba(0,0,0,0.32)",
  shadow6: "rgba(0,0,0,0.4)",
};

const darkShadows = {
  shadow1: "rgba(0,0,0,0.2)",
  shadow2: "rgba(0,0,0,0.3)",
  shadow3: "rgba(0,0,0,0.4)",
  shadow4: "rgba(0,0,0,0.5)",
  shadow5: "rgba(0,0,0,0.6)",
  shadow6: "rgba(0,0,0,0.7)",
};

const builtThemes = createThemes({
  componentThemes: defaultComponentThemes,

  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette,
    },

    extra: {
      light: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        shadowColor: lightShadows.shadow1,
      },
      dark: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        shadowColor: darkShadows.shadow1,
      },
    },
  },

  accent: {
    palette: {
      dark: [
        "hsla(249, 0%, 35%, 1)",
        "hsla(249, 0%, 38%, 1)",
        "hsla(249, 0%, 41%, 1)",
        "hsla(249, 0%, 43%, 1)",
        "hsla(249, 0%, 46%, 1)",
        "hsla(249, 0%, 49%, 1)",
        "hsla(249, 0%, 52%, 1)",
        "hsla(249, 0%, 54%, 1)",
        "hsla(249, 0%, 57%, 1)",
        "hsla(249, 0%, 60%, 1)",
        "hsla(250, 50%, 90%, 1)",
        "hsla(0, 0%, 95%, 1)",
      ],
      light: [
        "hsla(249, 0%, 0%, 1)",
        "hsla(249, 0%, 4%, 1)",
        "hsla(249, 0%, 9%, 1)",
        "hsla(249, 0%, 13%, 1)",
        "hsla(249, 0%, 18%, 1)",
        "hsla(249, 0%, 22%, 1)",
        "hsla(249, 0%, 27%, 1)",
        "hsla(249, 0%, 31%, 1)",
        "hsla(249, 0%, 36%, 1)",
        "hsla(249, 0%, 40%, 1)",
        "hsla(250, 50%, 95%, 1)",
        "hsla(0, 0%, 95%, 1)",
      ],
    },
  },

  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow),
      },
    },

    error: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red),
      },
    },

    success: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green),
      },
    },
  },
});

export const themes = builtThemes;
export default themes;

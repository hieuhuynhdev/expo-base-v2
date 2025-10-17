module.exports = (api) => {
  api.cache(true);
  return {
    presets: [["babel-preset-expo"]],
    plugins: [
      "@expo/html-elements/babel",
      // '@tamagui/babel-plugin',
      // ["tamagui", { components: ["tamagui"], config: "./tamagui.config.js" }],
      "react-native-reanimated/plugin",
    ],
  };
};

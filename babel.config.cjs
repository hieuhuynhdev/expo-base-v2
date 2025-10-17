module.exports = (api) => {
  api.cache(true);
  return {
    presets: [["babel-preset-expo"]],
    plugins: [
      "@expo/html-elements/babel",
      "@tamagui/babel-plugin",
      "react-native-reanimated/plugin",
    ],
  };
};

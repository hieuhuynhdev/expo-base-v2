module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      [
        "nativewind/babel",
        {
          allowModuleTransform: ["@expo/html-elements"],
        },
      ],
    ],
    plugins: [
      "@expo/html-elements/babel",
      "@tamagui/babel-plugin",
    ],
  };
};

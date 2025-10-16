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
      // Must come before the nativewind plugin
      "@expo/html-elements/babel",
    ],
  };
};

import { isLiquidGlassAvailable } from "expo-glass-effect";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export const DevelopmentIosLayout = () => {
  const rawTheme = useColorScheme();
  const theme = rawTheme === "dark" ? "dark" : "light";
  const isGlassAvailable = isLiquidGlassAvailable();
  const blurEffect =
    theme === "dark" ? "systemMaterialDark" : "systemMaterialLight";

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLargeTitle: false,
          headerTransparent: true,
          headerTintColor: theme === "dark" ? "white" : "black",
          headerLargeStyle: { backgroundColor: "transparent" },
          headerBlurEffect: isGlassAvailable ? undefined : blurEffect,
          title: "Development IOS",
        }}
      />
    </Stack>
  );
};

export default DevelopmentIosLayout;

import React from "react";
import { TamaguiProvider, Theme } from "tamagui";
import tamaguiConfig from "../tamagui.config";
import { useColorScheme } from "react-native";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export default function RootLayout() {
  const scheme = useColorScheme();
  const themeName = scheme === "dark" ? "dark" : "light";

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name={themeName}>
        <NativeTabs>
          <NativeTabs.Trigger name="home">
            <Label>Home</Label>
            <Icon sf="house.fill" />
          </NativeTabs.Trigger>

          <NativeTabs.Trigger name="tamagui">
            <Label>Tamagui</Label>
            <Icon sf="hammer.fill" />
          </NativeTabs.Trigger>
        </NativeTabs>
      </Theme>
    </TamaguiProvider>
  );
}

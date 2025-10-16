import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

// layouts
import { RootProvider } from "@/layouts/Providers/RootProvider";

export default function RootLayout() {
  return (
    <RootProvider>
      <NativeTabs>
        <NativeTabs.Trigger name="home">
          <Label>Home</Label>
          <Icon sf="house.fill" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="tamagui">
          <Label>Tamagui</Label>
          <Icon sf="uikit.fill" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="development">
          <Label>Development</Label>
          <Icon sf="hammer.fill" />
        </NativeTabs.Trigger>
      </NativeTabs>
    </RootProvider>
  );
}

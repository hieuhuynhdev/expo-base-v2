import { RootProvider } from "@/layouts/Providers/RootProvider";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from "expo-router/unstable-native-tabs";

export default function RootLayout() {
  return (
    <RootProvider>
      <NativeTabs>
        <NativeTabs.Trigger name="home">
          <Label>Home</Label>
          <Icon src={<VectorIcon family={MaterialIcons} name="home" />} />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="tamagui">
          <Label>Tamagui</Label>
          <Icon src={<VectorIcon family={MaterialIcons} name="apps" />} />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="development">
          <Label>Development</Label>
          <Icon src={<VectorIcon family={MaterialIcons} name="build" />} />
        </NativeTabs.Trigger>
      </NativeTabs>
    </RootProvider>
  );
}

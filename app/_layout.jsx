import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

// layouts

export const TabLayout = () => {
  return (
      <NativeTabs>
        <NativeTabs.Trigger name="home">
          <Label>Home</Label>
          <Icon sf="house.fill" drawable="custom_android_drawable" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="development">
          <Label>Development</Label>
          <Icon sf="laser.burst" drawable="custom_android_drawable" />
        </NativeTabs.Trigger>
      </NativeTabs>
  );
};

export default TabLayout;

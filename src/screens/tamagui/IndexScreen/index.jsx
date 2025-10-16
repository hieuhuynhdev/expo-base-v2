import { useLayoutEffect } from "react";
import { useNavigation, useRouter } from "expo-router";

import { Button, Text, YStack } from "tamagui";

export const IndexScreen = () => {
  // -- route --
  const router = useRouter();

  // -- navigation --
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: "Tamagui" });
  }, [navigation]);

  return (
    <YStack f={1} jc="center" ai="center" p="$4" gap="$3">
      <Text>Tamagui UI Kit</Text>
      <Button onPress={() => router.push("/tamagui/button")}>Button</Button>
    </YStack>
  );
};

export default IndexScreen;

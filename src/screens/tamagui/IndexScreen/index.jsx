import { useLayoutEffect } from "react";
import { useNavigation, useRouter } from "expo-router";

import { Button, YStack } from "tamagui";

export const IndexScreen = () => {
  // -- route --
  const router = useRouter();

  // -- navigation --
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: "Tamagui" });
  }, [navigation]);

  return (
    <YStack flex={1} padding="$4" gap="$3">
      {/* text */}
      <Button
        onPress={() => router.push("/tamagui/text")}
        themeInverse
        size="$3"
      >
        Text
      </Button>

      {/* button */}
      <Button
        onPress={() => router.push("/tamagui/button")}
        themeInverse
        size="$3"
      >
        Button
      </Button>
    </YStack>
  );
};

export default IndexScreen;

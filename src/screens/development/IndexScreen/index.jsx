import { useLayoutEffect } from "react";
import { useNavigation, useRouter } from "expo-router";

import { Button, YStack } from "tamagui";

export const IndexScreen = () => {
  // -- route --
  const router = useRouter();

  // -- navigation --
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: "Development" });
  }, [navigation]);

  return (
    <YStack flex={1} padding="$4" gap="$3">
      {/* form */}
      <Button
        onPress={() => router.push("/development/form")}
        themeInverse
        size="$3"
      >
        Form
      </Button>

      {/* notification */}
      <Button
        onPress={() => router.push("/development/notification")}
        themeInverse
        size="$3"
      >
        Notification
      </Button>
    </YStack>
  );
};

export default IndexScreen;

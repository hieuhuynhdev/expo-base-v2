import { Button, Host, VStack } from "@expo/ui/swift-ui";
import { useRouter } from "expo-router";

export const IndexScreen = () => {
  // -- route --
  const router = useRouter();

  return (
    <Host style={{ flex: 1 }}>
      <VStack spacing={12}>
        <Button
          variant="glassProminent"
          onPress={() => router.push("/development/button")}
        >
          Button
        </Button>
        <Button
          variant="glassProminent"
          onPress={() => router.push("/development/slider")}
        >
          Slider
        </Button>
        <Button
          variant="glassProminent"
          onPress={() => router.push("/development/tamagui")}
        >
          Tamagui
        </Button>
      </VStack>
    </Host>
  );
};

export default IndexScreen;

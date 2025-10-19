import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import { Text, YStack } from "tamagui";
import { LiquidGlassButton } from "./LiquidGlassButton";

export const LiquidGlassScreen = () => {
  return (
    <YStack
      alignItems="center"
      justifyContent="center"
      width={250}
      height={150}
      overflow="hidden"
      borderRadius={20}
    >
      <BlurView intensity={100} style={styles.blurContainer}>
        <Text fontSize={18} color="$color" fontWeight="600">
          Liquid Glass 🍸
        </Text>
      </BlurView>

      <YStack flex={1} ai="center" jc="center" bg="$background">
        <LiquidGlassButton
          title="✨ Liquid Button"
          onPress={() => alert("Pressed!")}
          tint="light"
          intensity={90}
        />
      </YStack>
    </YStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
  },
  background: {
    flex: 1,
    flexWrap: "wrap",
    ...StyleSheet.absoluteFill,
  },
  box: {
    width: "25%",
    height: "20%",
  },
  boxEven: {
    backgroundColor: "orangered",
  },
  boxOdd: {
    backgroundColor: "gold",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
  },
});

export default LiquidGlassScreen;

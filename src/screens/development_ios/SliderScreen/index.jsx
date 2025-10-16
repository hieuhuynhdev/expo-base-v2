import {
    Host,
    HStack,
    LinearProgress,
    Slider,
    Text,
    VStack,
} from "@expo/ui/swift-ui";
import {
    background,
    cornerRadius,
    glassEffect,
    padding,
} from "@expo/ui/swift-ui/modifiers";
import { Link } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";

const fromSadToHappyStrings = [
  "Devastated",
  "Very sad",
  "Sad",
  "A bit sad",
  "Neutral",
  "Slightly happy",
  "Happy",
  "Cheerful",
  "Very happy",
  "Joyful",
  "Excited",
  "Laughing",
  "Hilarious",
  "Rolling with laughter",
  "Celebrating",
];

export const SliderScreen = () => {
  const [mood, setMood] = useState("happy");
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ padding: 16 }}
    >
      <Link href="/home" style={{ marginBottom: 30 }}>
        Go to Home
      </Link>

      <Host matchContents>
        <VStack modifiers={[background("#FFF"), cornerRadius(16)]}>
          <HStack spacing={32} modifiers={[padding({ all: 16 })]}>
            <VStack spacing={16}>
              <Text
                size={48}
                modifiers={[
                  padding({
                    all: 16,
                  }),
                  glassEffect({
                    glass: {
                      variant: "regular",
                    },
                  }),
                ]}
              >
                {mood}
              </Text>
              <Slider
                value={fromSadToHappyStrings.indexOf(mood)}
                steps={fromSadToHappyStrings.length}
                max={fromSadToHappyStrings.length - 1}
                onValueChange={(value) => {
                  const roundedNumber = Math.round(value);
                  setMood(fromSadToHappyStrings[roundedNumber]);
                }}
              />
            </VStack>
          </HStack>

          <LinearProgress
            progress={
              (fromSadToHappyStrings.indexOf(mood) + 1) /
              (fromSadToHappyStrings.length - 1)
            }
            color={
              fromSadToHappyStrings.indexOf(mood) < 4
                ? "red"
                : fromSadToHappyStrings.indexOf(mood) < 8
                ? "orange"
                : "green"
            }
          />
        </VStack>
      </Host>
    </ScrollView>
  );
};

export default SliderScreen;

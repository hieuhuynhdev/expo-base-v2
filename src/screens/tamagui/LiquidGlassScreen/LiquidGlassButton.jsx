import { BlurView } from "expo-blur";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, YStack } from "tamagui";

export const LiquidGlassButton = ({
  title = "Press me",
  onPress,
  tint = "light", // 'light' | 'dark' | 'default'
  intensity = 80, // độ mờ
  width = 200,
  height = 60,
  borderRadius = 16,
  textColor = "#000",
  ...props
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <YStack
        width={width}
        height={height}
        overflow="hidden"
        borderRadius={borderRadius}
        alignItems="center"
        justifyContent="center"
        {...props}
      >
        <BlurView
          tint={tint}
          intensity={intensity}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />

        {/* Viền mờ nhẹ */}
        <YStack
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderWidth={1}
          borderColor="rgba(255,255,255,0.3)"
          borderRadius={borderRadius}
        />

        {/* Nội dung */}
        <Text
          fontSize={18}
          fontWeight="600"
          color={textColor}
          style={{ zIndex: 1 }}
        >
          {title}
        </Text>
      </YStack>
    </TouchableOpacity>
  );
};

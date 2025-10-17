import { Paragraph, SizableText, Text, XStack, YStack } from "tamagui";

export const TextScreen = () => {
  return (
    <YStack gap="$3" p="$4" alignItems="center">
      <Text
        color="$red10"
        fontFamily="$body"
        fontSize={20}
        hoverStyle={{
          color: "$colorHover",
        }}
      >
        Error Text
      </Text>
      <SizableText size="$3">SizableText</SizableText>
      <SizableText size="$10">LargeText</SizableText>
      <XStack>
        <SizableText theme="alt1" size="$3">
          alt1
        </SizableText>
        <SizableText theme="alt2" size="$3">
          alt2
        </SizableText>
      </XStack>
      <Paragraph size="$2" fontWeight="800">
        Paragraph
      </Paragraph>
    </YStack>
  );
};

export default TextScreen;

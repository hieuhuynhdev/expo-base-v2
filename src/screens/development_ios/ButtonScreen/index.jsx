import { Button, Host, VStack } from "@expo/ui/swift-ui";

export const ButtonScreen = () => {
  return (
    <Host style={{ flex: 1 }}>
      <VStack spacing={12}>
        <Button variant="default">Default</Button>
        <Button variant="bordered">Bordered</Button>
        <Button variant="plain">Plain</Button>
        <Button variant="glass">Glass</Button>
        <Button variant="glassProminent">Glass Prominent</Button>
        <Button variant="borderedProminent">Bordered Prominent</Button>
        <Button variant="borderless">Borderless</Button>
      </VStack>
    </Host>
  );
};

export default ButtonScreen;

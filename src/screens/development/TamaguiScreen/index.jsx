import { ThemeProvider } from "@/layouts/Providers/ThemeProvider";
import { ScrollView } from "react-native";
import { Button } from "tamagui";

export const TamaguiScreen = () => {
  return (
    <ThemeProvider>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ padding: 16 }}
      >
        <Button>Plain</Button>
      </ScrollView>
    </ThemeProvider>
  );
};

export default TamaguiScreen;
